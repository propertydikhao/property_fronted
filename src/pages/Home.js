import { Link } from "react-router-dom";
import CountUpAnimation from "../component/CountUp";
import Input from "../component/Input";
import Dropdown from "../component/Dropdown";
import Button from "../component/Button";
import { useEffect, useState } from "react";
import { apiFetch, capitaliseWords, formatIndianNumber, formatNumber, formatRupees } from "../utils/utils";
import { useDispatch } from "react-redux";
import { isToastShow } from "../redux/slice/toastSlice";

const Home = () => {
  const [searchProject, setSearchProject] = useState("");
  const [citySelect, setCitySelect] = useState("Thane");
  const [propertiesData, setPropertiesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProject();
  }, [citySelect]);

  const fetchProject = async () => {
    try {
      let payload = {
        city: citySelect.toLowerCase(),
        page: 1,
        search: "",
      };
      const projectData = await apiFetch(
        "/api/project/getProjectByCity",
        payload
      );
      if (projectData?.success) {
        setPropertiesData(projectData?.results);
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: projectData?.message,
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
      image: "ahmedabad.webp",
      name: "Ahmedabad",
    },
    {
      image: "bangalore.webp",
      name: "Bangalore",
    },
    {
      image: "hyderabad.webp",
      name: "Hyderabad",
    },
    {
      image: "mumbai.webp",
      name: "Mumbai",
    },
    {
      image: "pune.webp",
      name: "Pune",
    },
    {
      image: "thane.webp",
      name: "Thane",
    },
  ];

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
                src="/assets/img/banner.webp"
                alt="Featured Property"
                className="img-fluid"
              />
              <div className="position-absolute text-center start-50 translate-middle directly-with-builders">
                <h4 className="fs-4">Buy Homes Directly with Builders</h4>
                <div className="cta-buttons mt-4">
                  <Link to="#" className="btn btn-primary me-3">
                    Learn More About Us
                  </Link>
                  <Link to="#" className="btn btn-outline-primary">
                    Contact Our Team
                  </Link>
                </div>
              </div>
              <div className="position-absolute text-center start-50 translate-middle city-search-div">
                <div class="input-group">
                  <span
                    class="input-group-text btn-primary text-white"
                    id="visible-addon"
                    data-bs-toggle="modal"
                    data-bs-target="#citySelectionBackdrop"
                  >
                    <i class="bi bi-geo-alt me-1"></i>
                    {citySelect}
                  </span>
                  <Input
                    type="text"
                    id={"search"}
                    name={"search"}
                    class="form-control"
                    placeholder="Search"
                    required={false}
                    value={searchProject}
                    onChange={(e) => setSearchProject(e.target.value)}
                  />
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
                <div className="service-icon">
                  <i className="bi bi-search"></i>
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="service-details">Property Search</Link>
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
                <div className="service-icon">
                  <i className="bi bi-calculator"></i>
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="service-details">Property Valuation</Link>
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

      <section id="featured-services" className="featured-services section">
        <div className="container section-title my-4" data-aos="fade-up">
          <h2>Top New Project {citySelect}</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div
              className="col-lg-12"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div
                className="d-flex flex-wrap justify-content-between gap-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {propertiesData?.length > 0 ? (
                  propertiesData?.map((el, i) => {
                   
                    return (
                      <div className="cardDiv selected-project-div col-lg-6 col-sm-12 d-flex">
                        <div className="project-img">
                          <img
                            src={el?.projectImg?.[0]?.imageInfo?.url}
                            className="img-fuild"
                          />
                        </div>
                        <div className="project-info">
                          <h4>{el?.projectName}</h4>
                          <div className="d-flex justify-content-between">
                            <span>
                              By
                              <span className="group-name mx-2">
                                {el?.groupDetails?.groupName}
                              </span>
                            </span>
                            <span className="mx-2">
                              <i class="bi bi-geo-alt me-1"></i>
                              {capitaliseWords(el?.city)}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mt-2">
                            {el?.configuration?.map((conf, i) => {
                              return (
                                <span>
                                  {conf?.bhk}BHK{" "}
                                  {el?.configuration?.length > 1 && ","}
                                </span>
                              );
                            })}

                            <span className="mx-2">
                              <i class="bi bi-textarea me-1"></i>
                              {el?.configuration?.[0]?.reraArea} sqFt
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mt-2">
                            <span>
                              <i class="bi bi-house me-1"></i>
                              {el?.possesionByDeveloper} Possesion Date
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mt-2">
                            <span>
                              <i class="bi bi-currency-rupee"></i>
                              {formatIndianNumber(
                                el?.configuration?.[0]?.allInc
                              )}{" "}
                              - <i class="bi bi-currency-rupee"></i>
                              {formatIndianNumber(
                                el?.configuration?.[
                                  el?.configuration?.length - 1
                                ]?.allInc
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h4>No Property available for {citySelect}</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Why Us</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Why Choose Premier Real Estate Partners?</h3>
                <p>
                  With over two decades of experience in the real estate market,
                  we've built our reputation on trust, expertise, and
                  exceptional results. Our dedicated team of local experts
                  understands the nuances of every neighborhood and market
                  trend.
                </p>

                <div className="features-list">
                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <div>
                      <h5>Local Market Expertise</h5>
                      <p>
                        Deep knowledge of neighborhoods, pricing trends, and
                        market conditions in your area.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h5>Verified Listings Only</h5>
                      <p>
                        Every property is thoroughly vetted and verified before
                        listing to ensure accuracy and quality.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-headset"></i>
                    </div>
                    <div>
                      <h5>24/7 Client Support</h5>
                      <p>
                        Our dedicated support team is available around the clock
                        to assist with your real estate needs.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div>
                      <h5>Proven Track Record</h5>
                      <p>
                        Consistently delivering results with over 2,500
                        successful transactions and 98% client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cta-buttons mt-4">
                  <Link to="#" className="btn btn-primary me-3">
                    Learn More About Us
                  </Link>
                  <Link to="#" className="btn btn-outline-primary">
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
                  <Link to="#" className="btn btn-primary">
                    Contact Us Today
                  </Link>
                  <Link to="#" className="btn btn-outline">
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
                        citySelect === el?.name ? "selected" : ""
                      }`}
                      onClick={() => setCitySelect(el?.name)}
                    >
                      <img
                        src={`assets/img/${el?.image}`}
                        className="img-fuild"
                      />
                      <span>{el?.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
