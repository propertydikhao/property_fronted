import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  apiFetch,
  capitaliseWords,
  formatNumber,
  formatIndianNumber,
  modalClose,
} from "../utils/utils";
import { isToastShow } from "../redux/slice/toastSlice";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import YouTubePlayer from "../utils/getYoutubeLink";
import DateTimePicker from "../component/DateTimePicker";
import Button from "../component/Button";
import { isLoadingShow } from "../redux/slice/loadingSlice";
import QRCode from "../component/Qrcode";
import EmiCalculator from "../component/EmiCalculator";

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.user?.userInfo);
  const [projectDetails, setProjectDetails] = useState("");
  const [similarProject, setSimilarProject] = useState([]);
  const [projectTour, setProjectTour] = useState("");
  const [previewUnitImg, setPreviewUnitImg] = useState(null);
  const [bookingSlot, setBookingSlot] = useState({
    mode: "",
    date_time: "",
    present_by: "",
  });
  let bookingMode = useRef("offline");

  const { slug } = useParams();
  useEffect(() => {
    fetchProperty(slug);
  }, [slug]);

  useEffect(() => {}, [previewUnitImg]);

  const fetchProperty = async (slug) => {
    try {
      let payload = {
        projectSlug: slug,
      };
      const projectData = await apiFetch(
        "/api/project/getProjectBySlug",
        payload
      );
      if (projectData?.success) {
        setProjectDetails(projectData?.data?.[0]);
        setSimilarProject(projectData?.similarProject);
      } else {
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

  const mergeReraData = () => {
    const reraNos = projectDetails?.reraNo || "";
    const reraLinks = projectDetails?.reraLink || "";

    // If both are empty → return empty array early
    if (!reraNos.trim() && !reraLinks.trim()) {
      return [];
    }

    const reraNoArr = reraNos
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);
    const reraLinkArr = reraLinks
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);

    return reraNoArr.map((no, index) => ({
      reraNo: no,
      reraLink: reraLinkArr[index] || "",
    }));
  };

  const reraData = mergeReraData();

  let pros = projectDetails?.pros?.split(",");
  let cons = projectDetails?.cons?.split(",");

  const groupedbhks = projectDetails?.configuration?.length
    ? Object.values(
        projectDetails?.configuration?.reduce((acc, item) => {
          if (!acc[item.bhk]) {
            acc[item.bhk] = {
              bhk: item.bhk,
              items: [],
            };
          }
          acc[item.bhk].items.push(item);
          return acc;
        }, {})
      )
    : [];

  const groupedbhksForYt = projectDetails?.configuration?.length
    ? Object.values(
        projectDetails?.configuration?.reduce((acc, item) => {
          if (item?.videoLink && item.videoLink.trim() !== "") {
            if (!acc[item.bhk]) {
              acc[item.bhk] = {
                bhk: item.bhk,
                items: [],
              };
            }
            acc[item.bhk].items?.push(item);
          }
          return acc;
        }, {})
      )
    : [];

  const groupedbhksOnSimilar = (configBhk) => {
    return configBhk.reduce((acc, item) => {
      if (!acc.find((x) => x.bhk === item.bhk)) {
        acc.push(item);
      }
      return acc;
    }, []);
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
    bookingSlot["projectId"] = projectDetails["_id"];
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

  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Property Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Property Details</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="property-details" className="property-details section mt-4">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="property-hero d-flex flex-wrap"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="col-lg-7">
                  <div className="hero-image-container">
                    <div className="property-gallery-slider">
                      <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                          delay: 2500, // 2.5 sec
                          disableOnInteraction: false,
                        }}
                        // navigation={true} // 👈 adds arrows
                        pagination={{ clickable: true }} // 👈 adds dots
                      >
                        {projectDetails?.projectImg?.map((el, i) => {
                          return (
                            <SwiperSlide>
                              <img
                                src={el?.imageInfo?.url}
                                className="img-fluid hero-image"
                                alt="Property Main Image"
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                      <div className="hero-overlay">
                        <div className="property-badge">
                          <span className="featured-badge">
                            {capitaliseWords(projectDetails?.propertyType)}
                          </span>
                        </div>
                      </div>

                      {/* <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div> */}
                    </div>
                  </div>
                  <div className="property-info p-3">
                    <div className="property-header">
                      <h1 className="property-title">
                        {capitaliseWords(projectDetails?.projectName)}
                      </h1>
                      <div className="property-meta">
                        <span className="address">
                          <i className="bi bi-geo-alt"></i>
                          {projectDetails?.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    className="actions-card mb-4"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <div className="action-buttons">
                      <button
                        className="btn btn-primary btn-lg w-100 mb-3"
                        data-bs-toggle="modal"
                        data-bs-target="#bookingNowBackdrop"
                      >
                        <i className="bi bi-calendar-check"></i>
                        Booking Site Visit
                      </button>

                      {/* <div className="row g-2">
                        <div className="col-6">
                          <button className="btn btn-outline-primary w-100">
                            <i className="bi bi-heart"></i>
                            Save
                          </button>
                        </div>
                        <div className="col-6">
                          <button className="btn btn-outline-primary w-100">
                            <i className="bi bi-share"></i>
                            Share
                          </button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div
                    className="calculator-card mb-4"
                    data-aos="fade-up"
                    data-aos-delay="550"
                  >
                    <h4>EMI Calculator</h4>
                    <EmiCalculator />
                  </div>
                </div>
              </div>
              <div
                className="property-info mb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="pricing-section">
                  <div className="main-price">
                    Start With{" "}
                    <span>
                      <i className="bi bi-currency-rupee"></i>
                      {formatIndianNumber(
                        projectDetails?.configuration?.[0]?.allInc
                      )}{" "}
                      - <i className="bi bi-currency-rupee"></i>
                      {formatIndianNumber(
                        projectDetails?.configuration?.[
                          projectDetails?.configuration?.length - 1
                        ]?.allInc
                      )}
                    </span>
                  </div>
                  <div className="price-breakdown">
                    <span className="deposit">
                      No. of Towers : {projectDetails?.noOfTower}
                    </span>
                    <span className="available">
                      Possesion Date (By Developer) :{" "}
                      {projectDetails?.possesionByDeveloper}
                    </span>
                    <span className="available">
                      Possesion Date (By Rera) :{" "}
                      {projectDetails?.possesionByRera}
                    </span>
                  </div>
                </div>

                <div className="quick-stats">
                  <div className="stat-grid">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="bi bi-house"></i>
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">
                          {projectDetails?.configuration?.length}
                        </span>
                        <span className="stat-label">Configuration</span>
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="bi bi-arrows-angle-expand"></i>
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">
                          {formatNumber(projectDetails?.reraAreaMin)} -{" "}
                          {formatNumber(projectDetails?.reraAreaMax)}
                        </span>
                        <span className="stat-label">SqFt</span>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="bi bi-car-front"></i>
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">Optional</span>
                        <span className="stat-label">Parking</span>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="bi bi-building"></i>
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">
                          {projectDetails?.floors}
                        </span>
                        <span className="stat-label">Floor</span>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="bi bi-building"></i>
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">
                          {formatNumber(projectDetails?.landParcel)} Acres
                        </span>
                        <span className="stat-label">Land Parcel</span>
                      </div>
                    </div>
                    {/* <div className="stat-card" style={{ width: "300px" }}>
                      <div className="stat-content">
                        <span className="stat-number">
                          {reraData?.length > 0 &&
                            reraData?.map((el, i) => {
                              return (
                                <div>
                                  <Link to={el?.reraLink}>{el?.reraNo}</Link>
                                  <i className="bi bi-arrow-up-right mx-1 fs-6"></i>
                                </div>
                              );
                            })}
                        </span>
                        <span className="stat-label">Rera No.</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div
                className="cardDiv property-details mb-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="d-flex justify-content-between">
                  <h3>Property Description</h3>
                  {projectDetails?.projectBrochure && (
                    <Link
                      to={projectDetails?.projectBrochure?.url}
                      target="_blank"
                      style={{ height: "40px" }}
                    >
                      <Button
                        type="button"
                        icon={<i className="bi bi-download"></i>}
                        label="Brochure"
                      />
                    </Link>
                  )}
                </div>
                <hr />
                <div
                  dangerouslySetInnerHTML={{
                    __html: projectDetails?.projectDescription,
                  }}
                />
              </div>
              <div className="cardDiv">
                <div className="features-grid mt-4">
                  <div className="row">
                    <div className="col-md-12">
                      <h5>Interior Amenities</h5>
                      <ul className="feature-list d-flex gap-4 flex-wrap">
                        {projectDetails?.internalamenities?.length > 0 &&
                          projectDetails?.internalamenities?.map(
                            (internal, i) => {
                              return (
                                <li>
                                  <i className="bi bi-check2"></i> {internal}
                                </li>
                              );
                            }
                          )}
                      </ul>
                    </div>
                    <div className="col-md-12">
                      <h5>External Amenities</h5>
                      <ul className="feature-list feature-list d-flex gap-4 flex-wrap">
                        {projectDetails?.externalamenities?.length > 0 &&
                          projectDetails?.externalamenities?.map(
                            (external, i) => {
                              return (
                                <li>
                                  <i className="bi bi-check2"></i> {external}
                                </li>
                              );
                            }
                          )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="cardDiv floor-plan-section my-5"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link active`}
                      id="floorPlan-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#floorPlan"
                      type="button"
                      role="tab"
                      aria-controls="floorPlan"
                      aria-selected="true"
                    >
                      <h3>Floor Plan</h3>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="masterPlan-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#masterPlan"
                      type="button"
                      role="tab"
                      aria-controls="masterPlan"
                      aria-selected="false"
                    >
                      <h3>Master Plan</h3>
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="floorPlan"
                    role="tabpanel"
                    aria-labelledby="floorPlan-tab"
                  >
                    <Swiper
                      modules={[Autoplay, Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      className="planImg"
                      loop={true}
                      autoplay={{
                        delay: 2500, // 2.5 sec
                        disableOnInteraction: false,
                      }}
                      navigation={true} // 👈 adds arrows
                      pagination={{ clickable: true }} // 👈 adds dots
                    >
                      {projectDetails?.floorPlanImg?.map((floorImg, i) => {
                        return (
                          <SwiperSlide>
                            <img
                              key={i}
                              src={floorImg?.imageInfo?.url}
                              className="img-fluid hero-image"
                              style={{ height: "100%" }}
                              alt="Property Main Image"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="masterPlan"
                    role="tabpanel"
                    aria-labelledby="masterPlan-tab"
                  >
                    <Swiper
                      modules={[Autoplay, Navigation, Pagination]}
                      spaceBetween={30}
                      slidesPerView={1}
                      className="planImg"
                      loop={true}
                      autoplay={{
                        delay: 2500, // 2.5 sec
                        disableOnInteraction: false,
                      }}
                      navigation={true} // 👈 adds arrows
                      pagination={{ clickable: true }} // 👈 adds dots
                    >
                      {projectDetails?.masterPlanImg?.map((masterImg, i) => {
                        return (
                          <SwiperSlide>
                            <img
                              key={i}
                              src={masterImg?.imageInfo?.url}
                              className="img-fluid hero-image"
                              style={{ height: "100%" }}
                              alt="Property Main Image"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div
                className="property-details mb-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="cardDiv">
                  <div className="d-flex justify-content-between">
                    <h3>Configuration</h3>
                    {projectDetails?.costSheet && (
                      <Link
                        to={projectDetails?.costSheet?.url}
                        target="_blank"
                        style={{ height: "40px" }}
                      >
                        <Button
                          type="button"
                          icon={<i className="bi bi-download"></i>}
                          label="Cost Sheet"
                        />
                      </Link>
                    )}
                  </div>
                  <ul
                    className="nav nav-tabs"
                    id="configurationTab"
                    role="tablist"
                  >
                    {groupedbhks?.map((conf, i) => {
                      return (
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${i === 0 && "active"}`}
                            id={`${conf?.bhk}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${conf?.bhk}`}
                            type="button"
                            role="tab"
                            aria-controls={`${conf?.bhk}`}
                            aria-selected="true"
                          >
                            <h6>{conf?.bhk} BHK</h6>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="tab-content" id="configurationTabContent">
                    {groupedbhks?.map((configBhk, i) => {
                      return (
                        <div
                          className={`tab-pane fade ${
                            i === 0 ? "show active" : ""
                          }`}
                          id={configBhk?.bhk}
                          role="tabpanel"
                          aria-labelledby={`${configBhk?.bhk}-tab`}
                        >
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th scope="col">Carpet Area</th>
                                <th scope="col">Inc Price</th>
                                <th scope="col">Min Downpayment</th>
                                <th scope="col">Parking</th>
                                <th scope="col">Unit Plan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {configBhk?.items?.map((item, i) => {
                                return (
                                  <tr>
                                    <td style={{ alignContent: "center" }}>
                                      {item?.reraArea} sqft
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      <i className="bi bi-currency-rupee"></i>
                                      {formatIndianNumber(item?.allInc)}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      <i className="bi bi-currency-rupee"></i>
                                      {formatIndianNumber(item?.downPayment)}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      {item?.parking}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      {item?.unitPlanImg?.[0]?.imageInfo ? (
                                        <button
                                          type="button"
                                          className="border"
                                          data-bs-toggle="modal"
                                          data-bs-target="#previewUnitImgModal"
                                          onClick={() =>
                                            setPreviewUnitImg(
                                              item?.unitPlanImg?.[0]?.imageInfo
                                                ?.url
                                            )
                                          }
                                        >
                                          <img
                                            src={
                                              item?.unitPlanImg?.[0]?.imageInfo
                                                ?.url
                                            }
                                            style={{ width: "80px" }}
                                          />
                                        </button>
                                      ) : (
                                        "coming soon"
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="property-details mb-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="cardDiv">
                  <h3>
                    {capitaliseWords(projectDetails?.projectName)} QR Codes
                  </h3>
                  <div className="d-flex flex-wrap">
                    {reraData?.length > 0 &&
                      reraData?.map((el, i) => {
                        return (
                          <div className="d-flex flex-column align-items-center me-2">
                            <QRCode value={el?.reraLink} size={100} />
                            <Link to={el?.reraLink}>
                              <span>{el?.reraNo}</span>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                  <p className="mt-3 fw-semibold">
                    {capitaliseWords(projectDetails?.projectName)} Details are
                    available at{" "}
                    <Link
                      to={"https://maharera.mahaonline.gov.in"}
                      target="_blank"
                    >
                      Rera Verify Online Link
                    </Link>{" "}
                    under registered projects.
                  </p>
                </div>
              </div>

              <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="cardDiv">
                  <h5 className="fw-bold mb-4">
                    Payment Scheme for {projectDetails?.projectName}
                  </h5>

                  {projectDetails?.paymentSchemeDetails?.map((el, i) => {
                    return (
                      <div
                        className="accordion accordion-paymentScheme mb-2"
                        id={`accordionPaymentSchemeExample_${i}`}
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header d-flex">
                            <button
                              className="accordion-button collapsed ps-1"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#paymentScheme-collapseOne_${i}`}
                              aria-expanded="false"
                              aria-controls={`paymentScheme-collapseOne_${i}`}
                              style={{ background: "#d4d4d4" }}
                            >
                              <i className="bi bi-credit-card-2-front fs-6 mx-2 align-content-center"></i>
                              {capitaliseWords(el?.scheme)}
                            </button>
                          </h2>
                          <div
                            id={`paymentScheme-collapseOne_${i}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordionPaymentSchemeExample_${i}`}
                          >
                            <div className="accordion-body">
                              <p>{capitaliseWords(el?.description)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="cardDiv">
                  <h5 className="fw-bold mb-4">
                    Pros & Cons for {projectDetails?.projectName}
                  </h5>
                  <div
                    className="accordion accordion-pros"
                    id="accordionprosExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header d-flex">
                        <button
                          className="accordion-button collapsed ps-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#pros-collapseOne"
                          aria-expanded="false"
                          aria-controls="pros-collapseOne"
                          style={{ background: "#0080002b" }}
                        >
                          <i className="bi bi-hand-thumbs-up-fill fs-6 mx-2 align-content-center"></i>
                          Pros
                        </button>
                      </h2>
                      <div
                        id="pros-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionprosExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            {pros?.length > 0 &&
                              pros.map((item, i) => {
                                return <li>{item}</li>;
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mt-1">
                      <h2 className="accordion-header d-flex">
                        <button
                          className="accordion-button collapsed ps-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#cons-collapseTwo"
                          aria-expanded="false"
                          aria-controls="cons-collapseTwo"
                          style={{ background: "#ff000030" }}
                        >
                          <i className="bi bi-hand-thumbs-down-fill fs-6 mx-2 align-content-center"></i>
                          Cons
                        </button>
                      </h2>
                      <div
                        id="cons-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionconsExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            {cons?.length > 0 &&
                              cons.map((item, i) => {
                                return <li>{item}</li>;
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="property-details mb-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="row justify-content-between">
                  <div className="cardDiv customWidth col-md-6 col-12">
                    <h3>
                      About{" "}
                      {capitaliseWords(projectDetails?.groupDetails?.groupName)}
                    </h3>
                    <div className="d-flex ">
                      <img
                        src={projectDetails?.groupDetails?.imageInfo?.url}
                        className="rounded"
                        height={100}
                        width={100}
                      />
                      <div style={{ padding: "5px 25px" }}>
                        <h4>
                          {capitaliseWords(
                            projectDetails?.groupDetails?.groupName
                          )}
                        </h4>
                        <div className="d-flex flex-column">
                          <span>
                            Total Experiance :{" "}
                            {formatNumber(
                              projectDetails?.groupDetails?.totalExperience
                            )}
                            +
                          </span>
                          <span>
                            Total Delivered Project :{" "}
                            {formatNumber(
                              projectDetails?.groupDetails?.deliveredProject
                            )}
                            +
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-3 fw-normal fs-6"
                      style={{ height: "350px", overflow: "auto" }}
                      dangerouslySetInnerHTML={{
                        __html: projectDetails?.groupDetails?.aboutUs,
                      }}
                    />
                    <Link
                      to={`/builders/${projectDetails?.city}/${projectDetails?.groupDetails?.groupSlug}`}
                      className="btn btn-primary mt-4"
                    >
                      View All Projects <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>

                  <div className="cardDiv customWidth col-md-6 col-12">
                    {projectDetails?.overviewTitle &&
                    projectDetails?.overviewLink ? (
                      <div className="py-3" key={`yt_overview`}>
                        <h4>
                          {capitaliseWords(projectDetails?.overviewTitle)}
                        </h4>
                        <YouTubePlayer url={projectDetails?.overviewLink} />
                      </div>
                    ) : (
                      <>
                        {/* Nav Tabs */}
                        <ul className="nav nav-tabs" id="bhkTab" role="tablist">
                          {groupedbhksForYt?.map((conf, i) => {
                            return (
                              <li
                                className="nav-item"
                                role="presentation"
                                key={i}
                              >
                                <button
                                  className={`nav-link ${
                                    i === 0 ? "active" : ""
                                  }`}
                                  id={`tab-${conf?.bhk}`}
                                  data-bs-toggle="tab"
                                  data-bs-target={`#pane-${conf?.bhk}`}
                                  type="button"
                                  role="tab"
                                  aria-controls={`pane-${conf?.bhk}`}
                                  aria-selected="true"
                                >
                                  <h6>{conf?.bhk} BHK Sample Video</h6>
                                </button>
                              </li>
                            );
                          })}
                        </ul>

                        {/* Tab Content */}
                        <div className="tab-content" id="bhkTabContent">
                          {groupedbhksForYt?.map((configBhk, i) => {
                            return (
                              <div
                                key={i}
                                className={`tab-pane fade ${
                                  i === 0 ? "show active" : ""
                                }`}
                                id={`pane-${configBhk?.bhk}`}
                                role="tabpanel"
                                aria-labelledby={`tab-${configBhk?.bhk}`}
                              >
                                <div className="py-3" key={`yt_${i}`}>
                                  {configBhk?.items?.[0]?.videoLink ? (
                                    <YouTubePlayer
                                      url={configBhk?.items?.[0]?.videoLink}
                                    />
                                  ) : (
                                    <div className="text-muted text-center py-4">
                                      No sample video available
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="cardDiv">
                  <h3 className="mb-4">Approved Project By Bank</h3>
                  <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={4} // 👈 Show 4 images per slide
                    loop={true}
                    autoplay={{
                      delay: 2500, // 2.5 sec
                      disableOnInteraction: false,
                    }}
                    // navigation={true} // 👈 optional arrows
                    pagination={{ clickable: true }} // 👈 adds dots
                  >
                    {projectDetails?.bankDetails?.map((el, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={el?.imageInfo?.url}
                          className="img-fluid approve-bank hero-image"
                          alt={`Property Image ${i + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-5">
              <div
                className="actions-card mb-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="action-buttons">
                  <button
                    className="btn btn-primary btn-lg w-100 mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#bookingNowBackdrop"
                  >
                    <i className="bi bi-calendar-check"></i>
                    Booking Site Visit
                  </button>

                  <div className="row g-2">
                    <div className="col-6">
                      <button className="btn btn-outline-primary w-100">
                        <i className="bi bi-heart"></i>
                        Save
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-outline-primary w-100">
                        <i className="bi bi-share"></i>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="calculator-card mb-4"
                data-aos="fade-up"
                data-aos-delay="550"
              >
                <h4>EMI Calculator</h4>
                <EmiCalculator />
              </div>
            </div> */}
          </div>

          <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="cardDiv">
              <h5 className="fw-bold mb-4">
                FAQ's for {projectDetails?.projectName}
              </h5>

              {projectDetails?.faq?.map((el, i) => {
                return (
                  <div
                    className="accordion accordion-pros mb-3"
                    id="accordionfaqExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header d-flex">
                        <button
                          className="accordion-button collapsed ps-1"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#pros-collapseOne_${i}`}
                          aria-expanded="false"
                          aria-controls={`pros-collapseOne_${i}`}
                          style={{ background: "#0080002b" }}
                        >
                          <i className="bi bi-patch-question-fill fs-6 mx-2 align-content-center"></i>
                          <h5 className="fw-semibold mb-0">
                            {capitaliseWords(el?.question)}
                          </h5>
                        </button>
                      </h2>
                      <div
                        id={`pros-collapseOne_${i}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionfaqExample"
                      >
                        <div className="accordion-body">
                          <p>{el?.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="location-section mt-5"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h3>Project Live Location</h3>
            <div className="row">
              <div className="col-lg-8">
                <div className="map-wrapper">
                  <iframe
                    src={projectDetails?.liveLocation}
                    width="100%"
                    height="350"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="neighborhood-info">
                  <h5>Neighborhood Highlights</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: projectDetails?.locationDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="similar-properties my-4"
            data-aos="fade-up"
            data-aos-delay="650"
          >
            <h4>Similar Properties</h4>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={2}
              loop={false}
              autoplay={{
                delay: 2500, // 2.5 sec
                disableOnInteraction: false,
              }}
              // navigation={true} // 👈 optional arrows
              pagination={{ clickable: true }} // 👈 adds dots
            >
              {similarProject?.length > 0 &&
                similarProject?.map((el, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Link to={`/properties/property-details/${el?._id}`}>
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
                                <Link
                                  to={`/builders/${el?.city}/${el?.groupDetails?.groupSlug}`}
                                >
                                  <span className="group-name mx-2">
                                    {el?.groupDetails?.groupName}
                                  </span>
                                </Link>
                              </span>
                              <span className="mx-2">
                                <i className="bi bi-geo-alt me-1"></i>
                                {capitaliseWords(el?.city)}
                              </span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                              <span className="">
                                {groupedbhksOnSimilar(el?.configuration)?.map(
                                  (conf, i) => {
                                    return (
                                      <span className="me-1">
                                        {conf?.bhk}BHK,
                                      </span>
                                    );
                                  }
                                )}
                              </span>

                              <span className="mx-2">
                                <i className="bi bi-textarea me-1"></i>
                                {formatNumber(el?.reraAreaMin)} sqft -{" "}
                                {formatNumber(el?.reraAreaMax)} sqft
                              </span>
                            </div>
                            <div className="d-flex mt-2">
                              <i className="bi bi-house me-1"></i>
                              {el?.possesionByDeveloper} Possesion Date
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                              <span>
                                <i className="bi bi-currency-rupee"></i>
                                {formatIndianNumber(
                                  el?.configuration?.[0]?.allInc
                                )}{" "}
                                - <i className="bi bi-currency-rupee"></i>
                                {formatIndianNumber(
                                  el?.configuration?.[
                                    el?.configuration?.length - 1
                                  ]?.allInc
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>

      {/* preview unit image */}
      <div
        className="modal fade"
        id="previewUnitImgModal"
        tabIndex="-1"
        aria-labelledby="previewUnitImgModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="previewUnitImgModalLabel">
                Unit Image
              </h1>
              <button
                type="button"
                onClick={() => setPreviewUnitImg("")}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={previewUnitImg}
                height={500}
                style={{ width: "100%" }}
              />
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
                        <label
                          className="form-check-label"
                          htmlFor="googleMeet1"
                        >
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

export default PropertyDetails;
