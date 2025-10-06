import { Link } from "react-router-dom";
import CountUpAnimation from "../component/CountUp";
import Input from "../component/Input";
import Dropdown from "../component/Dropdown";
import Button from "../component/Button";
import { useEffect, useRef, useState } from "react";
import {
  apiFetch,
  capitaliseWords,
  formatIndianNumber,
  modalClose,
  slugGenerate,
} from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { isToastShow } from "../redux/slice/toastSlice";
import { isLoadingShow } from "../redux/slice/loadingSlice";
import DateTimePicker from "../component/DateTimePicker";
import useDebounce from "../utils/debounce";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Home = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.user?.userInfo);
  const [city, setCity] = useState("mumbai");
  const [propertiesData, setPropertiesData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [selectPropertyId, setSelectPropertyId] = useState("");
  const [locality_builder_data, setLocality_builder_data] = useState([]);
  const [query, setQuery] = useState("");
  const [bookingSlot, setBookingSlot] = useState({
    mode: "",
    date_time: "",
    present_by: "",
  });
  let bookingMode = useRef("offline");
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    if (debouncedQuery) {
      getSuggestionByCity(query);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    fetchProject();
  }, [city]);

  useEffect(() => {
    fetchBanner();
    fetchGroup();
  }, []);

  const fetchProject = async () => {
    try {
      let payload = {
        city,
        propertyType,
        page: 1,
        search: "",
      };
      const projectData = await apiFetch(
        "/api/project/getProjectByCity",
        payload
      );
      if (projectData?.success) {
        setPropertiesData(projectData?.results);
      }
    } catch (error) {
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
    }
  };

  const fetchBanner = async () => {
    try {
      let payload = {
        city,
        page: 1,
        search: "",
      };
      const bannerData = await apiFetch("/api/banner", payload);
      if (bannerData?.success) {
        setBannerData(bannerData?.results);
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: bannerData?.message,
          })
        );
      }
    } catch (error) {
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
    }
  };

  const fetchGroup = async () => {
    try {
      let payload = {
        page: 1,
        search: "",
      };
      const groupData = await apiFetch("/api/group", payload);
      if (groupData?.success) {
        setGroupData(groupData?.results);
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: groupData?.message,
          })
        );
      }
    } catch (error) {
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
    }
  };

  const cityArr = [
    {
      image: "mumbai.png",
      name: "mumbai",
    },
    {
      image: "navi-mumbai.png",
      name: "navi mumbai",
    },
    {
      image: "palghar.png",
      name: "palghar",
    },
    {
      image: "thane.png",
      name: "thane",
    },
  ];

  const citySelectHandler = (el) => {
    modalClose("citySelectionBackdrop");
    setCity(el?.name);
  };

  const onChangeHandler = (data) => {
    setBookingSlot({
      mode: bookingMode.current,
      data_time: data,
      present_by: bookingMode.current === "online" ? "googlemeet" : "",
    });
  };

  const submitRequestForBooking = async () => {
    if (userState == "" || userState == undefined || userState?.isLogin === 0) {
      return dispatch(
        isToastShow({
          isShow: true,
          type: "success",
          message: "Before slot booking, please login first",
        })
      );
    }

    dispatch(isLoadingShow({ isShow: true }));
    bookingSlot["projectId"] = selectPropertyId;
    bookingSlot["userId"] = userState?._id;

    try {
      const requestData = await apiFetch(
        "/api/project/submitRequestForBooking",
        bookingSlot
      );
      if (requestData?.success) {
        dispatch(
          isToastShow({
            isShow: true,
            type: "success",
            message: requestData?.message,
          })
        );

        modalClose("bookingNowBackdrop");
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: requestData?.message,
          })
        );
      }
    } catch (error) {
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
    }
  };

  const getSuggestionByCity = async (searchBy) => {
    try {
      let payload = {
        city,
        propertyType,
        searchBy,
      };
      const projectData = await apiFetch(
        "/api/project/getSuggestionByCity",
        payload
      );
      if (projectData?.success) {
        setLocality_builder_data(projectData?.data);
      } else {
        setLocality_builder_data([]);
        // dispatch(
        //   isToastShow({
        //     isShow: true,
        //     type: "error",
        //     message: projectData?.message,
        //   })
        // );
      }
    } catch (error) {
      setLocality_builder_data([]);
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
    }
  };

  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div
          className="container-fuild"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-12 position-relative">
            <div
              className="hero-content"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src={bannerData?.[0]?.imageInfo?.url}
                alt="Featured Property"
                className="img-fluid"
              />
              <div className="position-absolute text-center start-50 translate-middle directly-with-builders">
                <h4>Connect Directly with Builders</h4>
                <div className="cta-buttons no-broker mt-4">
                  <div>
                    <img src="assets/img/no-brokerage.svg" className="mx-1" />
                    <span>0% Brokerage</span>
                  </div>
                  <div>
                    <img src="assets/img/bottom-rate.svg" className="mx-1" />
                    <span>Best Rate Guarantee</span>
                  </div>
                </div>
                <div className="text-center city-search-div">
                  <div className="d-flex gap-2 justify-content-center">
                    <span
                      className={`btn ${
                        propertyType === "residential"
                          ? "btn-primary text-white"
                          : "btn btn-dark"
                      }`}
                      data-bs-toggle="modal"
                      data-bs-target="#citySelectionBackdrop"
                      onClick={() => setPropertyType("residential")}
                    >
                      Residential
                    </span>
                    <span
                      className={`btn ${
                        propertyType === "commercial"
                          ? "btn-primary text-white"
                          : "btn btn-dark"
                      }`}
                      data-bs-toggle="modal"
                      data-bs-target="#citySelectionBackdrop"
                      onClick={() => setPropertyType("commercial")}
                    >
                      Commercial
                    </span>
                  </div>
                  <div className="input-group-div mt-3">
                    <div
                      className="input-group-text btn-primary justify-content-center text-white col-sm-4 col-md-2"
                      id="visible-addon"
                    >
                      <span>
                        <i class="bi bi-geo-alt mx-1 mt-1"></i>
                        {capitaliseWords(city)}
                      </span>
                    </div>
                    <div className=" col-sm-8 col-md-10">
                      <Input
                        type="text"
                        id={"search"}
                        name={"search"}
                        className="form-control"
                        placeholder="Search"
                        required={false}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      {locality_builder_data?.length > 0 && (
                        <div
                          className={`suggestionDiv ${
                            query ? "visible home-visible" : ""
                          }`}
                        >
                          <ul>
                            {locality_builder_data?.map((item, i) => {
                              if (
                                item?.matchedField?.includes(
                                  "groupDetails.groupName"
                                )
                              ) {
                                return (
                                  <Link
                                    key={i}
                                    to={`/builders/${city}/${slugGenerate(
                                      item?.groupDetails?.groupName
                                    )}`}
                                  >
                                    <li className="d-flex justify-content-between">
                                      <div>
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {item?.groupDetails?.groupName}
                                      </div>
                                    <div className="fw-light">Builders</div>
                                    </li>
                                  </Link>
                                );
                              }
                              if (item?.matchedField?.includes("locality")) {
                                return (
                                  <Link
                                    key={i}
                                    to={`/properties/${city}/${slugGenerate(
                                      item?.locality
                                    )}`}
                                  >
                                    <li className="d-flex justify-content-between">
                                      <div>
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {item?.locality}
                                      </div>
                                      <div className="fw-light">Locality</div>
                                    </li>
                                  </Link>
                                );
                              }
                              if (item?.matchedField?.includes("projectName")) {
                                return (
                                  <Link
                                    key={i}
                                    to={`/properties/property-details/${item?.projectSlug}`}
                                  >
                                    <li className="d-flex justify-content-between">
                                      <div>
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {item?.projectName}
                                      </div>
                                      <div className="fw-light">Project</div>
                                    </li>
                                  </Link>
                                );
                              }
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="d-flex flex-wrap m-5 justify-content-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="cardDiv col-md-3 col-12 signup-facility text-center">
                  <div>
                    <img src="assets/img/bonus.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">
                      Referral Bonus Refer Housiey & get bonus upto Rs 2lac
                    </span>
                    <p className="caption">
                      Get Flat Bonus Amount directly credited to your account.
                    </p>
                  </div>
                </div>
                <div className="cardDiv col-md-3 col-12 signup-facility text-center">
                  <div>
                    <img src="assets/img/free-cab.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Free Site Visit</span>
                    <p className="caption">
                      Get Free Pickup & Drop for unlimited project's in the
                      entire city.
                    </p>
                  </div>
                </div>
                <div className="cardDiv col-md-3 col-12 signup-facility text-center">
                  <div>
                    <img src="assets/img/bottom-rate.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Bottom Rate Guarantee</span>
                    <p className="caption">
                      Rock Bottom Prices Guaranteed in return otherwise, get
                      double the discount from us.
                    </p>
                  </div>
                </div>

                <div className="cardDiv col-md-3 col-12 signup-facility text-center">
                  <div>
                    <img src="assets/img/manager.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Relationship Manager</span>
                    <p className="caption">
                      Get personalized RM managing everything from site visit to
                      booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-services" className="featured-services section">
        <div className="container section-title mb-4" data-aos="fade-up">
          <h2>Services</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service-card">
                <div className="service-info">
                  <h3>
                    <div className="property-dikhao-services">
                      <span>Property Dikhao</span>
                      <div className="service">Home Interior</div>
                    </div>
                  </h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                  </p>
                  <ul className="service-highlights">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Comprehensive
                      Listings
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Advanced
                      Filtering
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Virtual Tours
                    </li>
                  </ul>
                  <Link to="service-details" className="service-link">
                    <span>Explore Now</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="service-visual">
                  <img
                    src="assets/img/real-estate/property-interior-2.webp"
                    className="img-fluid"
                    alt="Property Search"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="service-card">
                <div className="service-info">
                  <h3>
                    <div className="property-dikhao-services">
                      <span>Property Dikhao</span>
                      <div className="service">Home Loan</div>
                    </div>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <ul className="service-highlights">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Market
                      Analysis
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Comparative
                      Reports
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Investment
                      Insights
                    </li>
                  </ul>
                  <Link to="service-details" className="service-link">
                    <span>Get Valuation</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="service-visual">
                  <img
                    src="assets/img/real-estate/property-exterior-1.webp"
                    className="img-fluid"
                    alt="Property Valuation"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-services" className="featured-services section">
        <div className="container section-title my-4" data-aos="fade-up">
          <h2>Top New Project {city}</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="d-flex flex-wrap justify-content-between gap-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {propertiesData?.length > 0 ? (
              propertiesData?.map((el, i) => {
                return (
                  <div className="cardDiv selected-project-div col-lg-6 col-sm-12 d-flex flex-wrap">
                    <div className="col-lg-4 col-sm-12">
                      <div className="project-left-img">
                        <img
                          src={el?.projectImg?.[0]?.imageInfo?.url}
                          className="img-fuild"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      <div className="project-info">
                        <Link
                          to={`/properties/property-details/${el?.projectSlug}`}
                        >
                          <h4>{el?.projectName}</h4>
                        </Link>
                        <div className="d-flex justify-content-between">
                          <span>
                            By
                            <span className="group-name mx-2">
                              {el?.groupDetails?.groupName}
                            </span>
                          </span>
                          <span className="mx-2">
                            <i className="bi bi-geo-alt me-1"></i>
                            {capitaliseWords(el?.city)}
                          </span>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between gap-2 mt-2">
                          <div className="d-flex flex-wrap">
                            {el?.configuration?.map((conf, i) => {
                              return (
                                <span className="me-1">{conf?.bhk}BHK,</span>
                              );
                            })}
                          </div>

                          <span>
                            <i className="bi bi-textarea me-1"></i>
                            {el?.configuration?.[0]?.reraArea} sqFt
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>
                            <i className="bi bi-house me-1"></i>
                            {el?.possesionByDeveloper} Possesion Date
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span>
                            <i className="bi bi-currency-rupee"></i>
                            {formatIndianNumber(
                              el?.configuration?.[0]?.allInc
                            )}{" "}
                            - <i className="bi bi-currency-rupee"></i>
                            {formatIndianNumber(
                              el?.configuration?.[el?.configuration?.length - 1]
                                ?.allInc
                            )}
                          </span>
                        </div>
                        <div
                          className="book-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#bookingNowBackdrop"
                          onClick={() => setSelectPropertyId(el?._id)}
                        >
                          <i class="bi bi-telephone mx-1"></i>Book Now
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h4>No Property available for {city}</h4>
            )}
          </div>
        </div>
      </section>

      <section id="featured-services" className="featured-services section">
        <div className="container section-title my-4" data-aos="fade-up">
          <h2>Property Dikhao Unique Features</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div
              className="col-lg-12"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div
                className="d-flex flex-wrap justify-content-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="cardDiv col-md-3 col-12 uniques-feature signup-facility text-center">
                  <div>
                    <img src="assets/img/unboxing.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Project Unboxing</span>
                    <p className="caption">
                      Complete Project analysis with overview, location,
                      amenities, plans, carpet area, payment schemes, pros &
                      cons,
                    </p>
                  </div>
                </div>
                <div className="cardDiv col-md-3 col-12 uniques-feature signup-facility text-center">
                  <div>
                    <img src="assets/img/pros-cons.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Pros & Cons</span>
                    <p className="caption">
                      First time in Indian Real Estate, Get unbiased views of
                      projects with Pros & Cons by in depth analysis from our
                      experts.
                    </p>
                  </div>
                </div>
                <div className="cardDiv col-md-3 col-12 uniques-feature signup-facility text-center">
                  <div>
                    <img src="assets/img/tour.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Virtual 360 Toure</span>
                    <p className="caption">
                      Experience the 3D Tour & feel the view, facing, &
                      amenities of the projects by sitting in your home only.
                    </p>
                  </div>
                </div>
                <div className="cardDiv col-md-3 col-12 uniques-feature signup-facility text-center">
                  <div>
                    <img src="assets/img/rtc.svg" />
                  </div>
                  <div className="mt-3">
                    <span className="title">Real Time Calling</span>
                    <p className="caption">
                      Get instant resolution of your queries by our 24/7
                      Property experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Why Choose Property Dikhao?</h3>
                <p>
                  We Advice: Our experts are highly informed about the real
                  estate market and can advise you to make informed decisions
                  whether it is in purchasing, selling or investing.
                </p>

                <div className="features-list">
                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <div>
                      <h5>Broad Property Portfolio</h5>
                      <p>
                        Residential to commercial, ready-to-moveto
                        under-construction, we provide chosen portfolio of
                        properties that suit all requirements and budgets.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h5>Open Process:</h5>
                      <p>
                        We tell it like it is and we are open with deals. No
                        small print, no surprises-- hassle-free transactions.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-headset"></i>
                    </div>
                    <div>
                      <h5>One to One Service:</h5>
                      <p>
                        Every customer is unique. We listen to your needs and
                        offer certain choices based on your life needs and
                        investment requirements.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div>
                      <h5>Reliable Partnerships:</h5>
                      <p>
                        Our property owners and business partners are trusted
                        and authorized, and this ensures that our deals are
                        safe, legal and trustworthy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cta-buttons mt-4">
                  <Link to="/contact" className="btn btn-primary me-3">
                    Learn More About Us
                  </Link>
                  <Link to="/contact" className="btn btn-outline-primary">
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="stats-section">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-house-door"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={2500} />+
                      </div>
                      <div className="stat-label">Homes Sold</div>
                      <p>
                        Successfully closed transactions across all property
                        types and price ranges.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={96} />%
                      </div>
                      <div className="stat-label">Client Satisfaction</div>
                      <p>
                        Exceptional service quality rated by our satisfied
                        homeowners and investors.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-clock-history"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={20} />+
                      </div>
                      <div className="stat-label">Years Experience</div>
                      <p>
                        Two decades of expertise navigating changing market
                        conditions successfully.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-award"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={45} />+
                      </div>
                      <div className="stat-label">Industry Awards</div>
                      <p>
                        Recognition for excellence in real estate service and
                        client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="call-to-action-1 call-to-action section"
        id="call-to-action"
      >
        <div
          className="cta-bg"
          style={{
            backgroundImage: "url('assets/img/real-estate/showcase-3.webp')",
          }}
        ></div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="cta-content text-center">
                <h2>Need Help Finding Your Dream Property?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us Today
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Schedule a Call
                  </Link>
                </div>

                <div className="cta-features">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-telephone-fill"></i>
                    <span>Free Consultation</span>
                  </div>
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <i className="bi bi-clock-fill"></i>
                    <span>24/7 Support</span>
                  </div>
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-shield-check-fill"></i>
                    <span>Trusted Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-services" className="featured-services section">
        <div className="container section-title my-4" data-aos="fade-up">
          <h2>We Worked With</h2>
        </div>

        <div className="container mb-4" data-aos="fade-up" data-aos-delay="100">
          <div className="gap-2">
            {groupData?.length > 0 ? (
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500, // 2.5 sec
                  disableOnInteraction: false,
                }}
                // navigation={true} // 👈 adds arrows
                pagination={{ clickable: true }} // 👈 adds dots
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 576px
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  // when window width is >= 992px
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {groupData?.map((el, i) => {
                  return (
                    <SwiperSlide>
                      <div className="cardDiv selected-builder-div col-sm-6 col-md-4 col-lg-4">
                        <div className="project-img">
                          <img src={el?.imageInfo?.url} className="img-fuild" />
                        </div>
                        <div className="experiance">
                          <span>Experiance : 100</span>&nbsp;&nbsp; |
                          &nbsp;&nbsp;
                          <span>Projects : 10</span>
                        </div>
                        <Link
                          to={`/builders/${city}/${el?.groupSlug}`}
                          className="btn btn-primary mt-4"
                        >
                          View All Projects{" "}
                          <i className="bi bi-arrow-up-right"></i>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <h4>No Property available for {city}</h4>
            )}
          </div>
        </div>
      </section>

      {/* city selection modal */}
      <div
        className="modal fade"
        id="citySelectionBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="citySelectionBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="citySelectionBackdropLabel">
                Select Your City
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="p-10 d-flex justify-content-center flex-wrap gap-5">
                {cityArr?.map((el, i) => {
                  return (
                    <div
                      className={`col-3 d-flex flex-column text-center select-city-div ${
                        city === el?.name ? "selected" : ""
                      }`}
                      onClick={() => citySelectHandler(el)}
                    >
                      <img
                        src={`assets/img/${el?.image}`}
                        className="img-fuild"
                      />
                      <span>{capitaliseWords(el?.name)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* schedule modal */}
      <div
        className="modal fade"
        id="bookingNowBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="bookingNowBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="bookingNowBackdropLabel">
                Booking Time!!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <ul
                  className="nav nav-tabs"
                  id="configurationTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="slotBooking-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#slotBooking"
                      type="button"
                      role="tab"
                      aria-controls="slotBooking"
                      aria-selected="true"
                      onClick={() => (bookingMode.current = "offline")}
                    >
                      <h6>Book Site Visit</h6>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="meetBooking-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#meetBooking"
                      type="button"
                      role="tab"
                      aria-controls="meetBooking"
                      aria-selected="true"
                      onClick={() => (bookingMode.current = "online")}
                    >
                      <h6>Book Online Presantation</h6>
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="bookingTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="slotBooking"
                    role="tabpanel"
                    aria-labelledby="slotBooking-tab"
                  >
                    <DateTimePicker
                      label="Select your pick up date"
                      onChange={(data) => onChangeHandler(data)}
                    />
                  </div>
                </div>

                <div className="tab-content" id="bookingTabContent">
                  <div
                    className="tab-pane fade show"
                    id="meetBooking"
                    role="tabpanel"
                    aria-labelledby="meetBooking-tab"
                  >
                    <div className="d-flex">
                      <DateTimePicker
                        label="Book Online Slot"
                        onChange={(data) => onChangeHandler(data)}
                      />
                      <div className="form-check align-self-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="googleMeet"
                          checked="true"
                          id="googleMeet1"
                        />
                        <label className="form-check-label" for="googleMeet1">
                          <i className="bi bi-camera-video-fill me-2"></i>
                          Google Meet
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="w-100" onClick={() => submitRequestForBooking()}>
                <Button
                  type="submit"
                  icon={<i className="bi bi-check-lg fs-4"></i>}
                  label="Submit Request"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
