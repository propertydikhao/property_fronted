import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  apiFetch,
  capitaliseWords,
  formatNumber,
  formatRupees,
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

  const { id } = useParams();
  useEffect(() => {
    fetchProperty(id);
  }, [id]);

  useEffect(() => {}, [previewUnitImg]);

  const fetchProperty = async (id) => {
    try {
      let payload = {
        projectId: id,
      };
      const projectData = await apiFetch("/api/project/getProjectId", payload);
      if (projectData?.success) {
        setProjectDetails(projectData?.data?.[0]);
        setSimilarProject(projectData?.similarProject);

        dispatch(
          isToastShow({
            isShow: true,
            type: "success",
            message: projectData?.message,
          })
        );
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

  let reraNo = projectDetails?.reraNo?.split(",");
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
        dispatch(isLoadingShow({ isShow: false }));
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: requestData?.message,
          })
        );
        dispatch(isLoadingShow({ isShow: false }));
      }
    } catch (error) {
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
      dispatch(isLoadingShow({ isShow: false }));
    }
  };

  const submitRequestForCall = async () => {
    if (userState == "" || userState == undefined || userState?.isLogin === 0) {
      return dispatch(
        isToastShow({
          isShow: true,
          type: "success",
          message: "Before call request, please login first",
        })
      );
    }

    dispatch(isLoadingShow({ isShow: true }));

    try {
      let payload = {
        projectId: projectDetails?._id,
        userId: userState?._id,
      };
      const requestData = await apiFetch(
        "/api/project/submitRequestForCall",
        payload
      );
      if (requestData?.success) {
        dispatch(
          isToastShow({
            isShow: true,
            type: "success",
            message: requestData?.message,
          })
        );
        dispatch(isLoadingShow({ isShow: false }));
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: requestData?.message,
          })
        );
        dispatch(isLoadingShow({ isShow: false }));
      }
    } catch (error) {
      dispatch(
        isToastShow({
          isShow: true,
          type: "error",
          message: "something went wrong",
        })
      );
      dispatch(isLoadingShow({ isShow: false }));
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

      <section id="property-details" className="property-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="property-hero mb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="hero-image-container">
                  <div className="property-gallery-slider swiper init-swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
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
                            {/* <span className="status-badge for-rent">
                              For Rent
                            </span> */}
                            <span className="featured-badge">New Project</span>
                          </div>
                          <button
                            type="button"
                            className="virtual-tour-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() =>
                              setProjectTour(projectDetails?.projectTour)
                            }
                          >
                            <i className="bi bi-play-circle"></i>
                            Project Tour
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div> */}
                  </div>
                </div>
              </div>
              <div
                className="property-info mb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
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

                <div className="pricing-section">
                  <div className="main-price">
                    Start With{" "}
                    {formatRupees(projectDetails?.configuration?.[0]?.allInc)}
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
                          {formatNumber(projectDetails?.reraAreaMin)}
                        </span>
                        <span className="stat-label">Sq Ft</span>
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
                    <div className="stat-card" style={{ width: "300px" }}>
                      <div className="stat-content">
                        <span className="stat-number">
                          {reraNo?.length > 0 &&
                            reraNo?.map((el, i) => {
                              return (
                                <div>
                                  <Link to="https://maharera.maharashtra.gov.in/">
                                    {el}
                                  </Link>
                                  <i className="bi bi-arrow-up-right mx-1 fs-6"></i>
                                </div>
                              );
                            })}
                        </span>
                        <span className="stat-label">Rera No.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="property-details mb-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Property Description</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: projectDetails?.projectDescription,
                  }}
                />

                <div className="features-grid mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Interior Amenities</h5>
                      <ul className="feature-list">
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
                    <div className="col-md-6">
                      <h5>External Amenities</h5>
                      <ul className="feature-list">
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
                className="floor-plan-section mb-5"
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
                  <h3>Configuration</h3>
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
                                      {item?.reraArea}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      {formatRupees(item?.allInc)}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      {formatRupees(item?.downPayment)}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      {item?.parking}
                                    </td>
                                    <td style={{ alignContent: "center" }}>
                                      {item?.unitPlanImg?.[0]?.uploadPath ? (
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
                    {reraNo?.length > 0 &&
                      reraNo?.map((el, i) => {
                        return (
                          <div className="d-flex flex-column align-items-center">
                            <QRCode value={el} size={100} />
                            <span>{el}</span>
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
                <div className="cardDiv">
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
                          {projectDetails?.groupDetails?.totalExperience}
                        </span>
                        <span>
                          Total Delivered Project :{" "}
                          {projectDetails?.groupDetails?.deliveredProject}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-3 fw-normal fs-5"
                    dangerouslySetInnerHTML={{
                      __html: projectDetails?.groupDetails?.aboutUs,
                    }}
                  />
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
                          className="img-fluid hero-image"
                          alt={`Property Image ${i + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="sticky-sidebar">
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
                  className="agent-card mb-4"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <div className="agent-header">
                    <div className="agent-avatar">
                      <img
                        src="/assets/img/person/person-f-12.webp"
                        className="img-fluid"
                        alt="Agent Photo"
                      />
                      <div className="online-status"></div>
                    </div>
                    <div className="agent-info">
                      <h4>
                        {capitaliseWords(
                          projectDetails?.groupDetails?.groupName
                        )}
                      </h4>
                      <p className="agent-role">
                        {projectDetails?.groupDetails?.totalExperience} Years'
                        Experiance
                      </p>
                      <p className="agent-role">
                        {projectDetails?.groupDetails?.deliveredProject}{" "}
                        Delivered Project
                      </p>
                    </div>
                  </div>

                  {/* <div className="agent-contact">
                    <div className="contact-item">
                      <i className="bi bi-telephone"></i>
                      <span>+1 (555) 234-5678</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-envelope"></i>
                      <span>s.johnson@example.com</span>
                    </div>
                  </div> */}

                  <div className="agent-actions mt-3">
                    <button
                      className="btn btn-success w-100 mb-2"
                      onClick={() => submitRequestForCall()}
                    >
                      <i className="bi bi-telephone"></i>
                      Call Now
                    </button>
                    <button className="btn btn-outline w-100">
                      <i className="bi bi-chat-dots"></i>
                      Send Message
                    </button>
                  </div>
                </div>
                <div
                  className="contact-form-card mb-4"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  <h4>Request Information</h4>
                  <form
                    action="forms/contact.php"
                    method="post"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <select
                          name="subject"
                          className="form-select"
                          required=""
                        >
                          <option value="">I'm interested in...</option>
                          <option value="Scheduling a viewing">
                            Scheduling a viewing
                          </option>
                          <option value="Getting more information">
                            Getting more information
                          </option>
                          <option value="Submitting an application">
                            Submitting an application
                          </option>
                        </select>
                      </div>
                      <div className="col-12 mb-3">
                        <textarea
                          name="message"
                          className="form-control"
                          rows="4"
                          placeholder="Additional questions or preferred viewing times..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your request has been sent successfully!
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Send Request
                    </button>
                  </form>
                </div>

                <div
                  className="calculator-card mb-4"
                  data-aos="fade-up"
                  data-aos-delay="550"
                >
                  <h4>EMI Calculator</h4>
                  <EmiCalculator />
                </div>

                <div
                  className="similar-properties"
                  data-aos="fade-up"
                  data-aos-delay="650"
                >
                  <h4>Similar Properties</h4>
                  <div style={{ maxHeight: "500px", overflow: "auto" }}>
                    {similarProject?.length > 0 &&
                      similarProject?.map((el, i) => {
                        return (
                          <Link to={`/properties/property-details/${el?._id}`}>
                            <div className="similar-property-item">
                              <img
                                src={el?.projectImg?.[0]?.imageInfo?.url}
                                className="img-fluid"
                                alt="Similar Property"
                              />
                              <div className="similar-info">
                                <h6>{capitaliseWords(el?.projectName)}</h6>
                                <p className="similar-price">
                                  {formatRupees(el?.configuration?.[0]?.allInc)}
                                </p>
                                <p className="similar-specs">
                                  {el?.configuration?.length} bed •
                                  {formatNumber(el?.reraAreaMin)} sq ft
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="cardDiv">
              <h5 className="fw-bold mb-4">
                FAQ's for {projectDetails?.projectName}
              </h5>

              {projectDetails?.faq?.map((el, i) => {
                return (
                  <div
                    className="accordion accordion-pros"
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
                          <h5 className="fw-semibold mb-0">{el?.question}</h5>
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
        </div>
      </section>

      {/* project tour */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Project Tour
              </h1>
              <button
                type="button"
                onClick={() => setProjectTour("")}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <YouTubePlayer url={projectTour} />
            </div>
          </div>
        </div>
      </div>

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
                      <h6>Pick Your Date/Time</h6>
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

export default PropertyDetails;
