import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import Input from "../component/Input";
import {
  apiFetch,
  formatIndianNumber,
  formatNumber,
  modalClose,
} from "../utils/utils";
import { isToastShow } from "../redux/slice/toastSlice";
import useDebounce from "../utils/debounce";
import Dropdown from "../component/Dropdown";
import DateTimePicker from "../component/DateTimePicker";
import { isLoadingShow } from "../redux/slice/loadingSlice";
import Button from "../component/Button";

const Properties = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userState = useSelector((state) => state?.user?.userInfo);
  let locationSpilt = location?.pathname?.split("/");
  const [city, setCity] = useState(locationSpilt?.[2]);
  const [groupName, setGroupName] = useState(locationSpilt?.[3]);
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("");
  const [propertiesData, setPropertiesData] = useState([]);
  const [isSuggectionClick, setIsSuggectionClick] = useState(false);
  const [suggestionName, setSuggestionName] = useState("");
  const [locality_builder_data, setLocality_builder_data] = useState([]);
  const [totatPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [selectPropertyId, setSelectPropertyId] = useState("");
  const [bookingSlot, setBookingSlot] = useState({
    mode: "",
    date_time: "",
    present_by: "",
  });
  let bookingMode = useRef("offline");
  const debouncedQuery = useDebounce(query, 250);
  
  useEffect(() => {
   
    if (debouncedQuery && isSuggectionClick == false) {
      getSuggestionByCity(query);
    }
  }, [debouncedQuery]);


  useEffect(() => {
    onCityChange();
  }, [activePage, city, suggestionName]);

  const onCityChange = async () => {
    setQuery("");
    try {
      let payload = {
        city,
        groupName,
        page: activePage,
        search: suggestionName,
      };
      const projectData = await apiFetch(
        "/api/project/getProjectByCity",
        payload
      );
      if (projectData?.success) {
        setPropertiesData(projectData?.results);
        setTotalPages(projectData?.totalPages);
        setTotalCount(projectData?.total);
        setLocality_builder_data([]);
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
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: projectData?.message,
          })
        );
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

  const cityArr = [
    {
      label: "Select City",
      value: "",
    },
    {
      label: "Mumbai",
      value: "mumbai",
    },
    {
      label: "Navi Mumbai",
      value: "navi-mumbai",
    },
    {
      label: "Thane",
      value: "thane",
    },
    {
      label: "Palghar",
      value: "palghar",
    },
  ];

  const priceArr = [
    {
      label: "Select Price",
      value: "",
    },
    {
      label: "60lac to 1cr",
      value: "60lac to 1cr",
    },
    {
      label: "1.5cr to 2cr",
      value: "1.5cr to 2cr",
    },
    {
      label: "+2cr",
      value: "+2cr",
    },
  ];

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

  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Properties</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="index">Home</Link>
              </li>
              <li className="current">Properties</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="properties" className="properties section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="search-bar mb-5"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="search-wrapper">
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-4">
                      <Dropdown
                        label="City"
                        id="city"
                        name="city"
                        required={false}
                        option={cityArr}
                        value={city}
                        icon={
                          <i className="bi bi-crosshair me-1 field-icon"></i>
                        }
                        // onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <Input
                        label="Search By"
                        id="search_by"
                        type="text"
                        name="Search By"
                        placeholder="Enter Locality or Group Name"
                        required={false}
                        icon={<i className="bi bi-cursor field-icon"></i>}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      {locality_builder_data?.length > 0 && (
                        <div
                          className={`suggestionDiv ${query ? "visible" : ""}`}
                        >
                          <ul>
                            {locality_builder_data?.map((item, i) => {
                              return (
                                <li
                                  key={i}
                                  onClick={(e) =>
                                    setSuggestionName(e.target.innerText)
                                  }
                                >
                                  <div>
                                    {" "}
                                    <i className="bi bi-pin-map me-2"></i>
                                    {item?.projectName} {}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <Dropdown
                        label="Price"
                        id="price"
                        name="price"
                        required={false}
                        option={priceArr}
                        value={price}
                        icon={
                          <i className="bi bi-currency-rupee me-1 field-icon"></i>
                        }
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {propertiesData?.length > 0 ? (
            <>
              <div
                className="results-header mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="results-info">
                      <h5>{totalCount} Properties Found</h5>
                      <p className="text-muted">
                        Showing properties in Beverly Hills, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="properties-container">
                <div
                  className="properties-masonry view-masonry active"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div className="row g-4">
                    {propertiesData?.map((property, i) => {
                      return (
                        <div
                          className="col-lg-4 col-md-6"
                          key={`property_${i}`}
                        >
                          <div className="property-item">
                            <Link
                              to={`property-details/${property?.projectSlug}`}
                              className="property-link"
                            >
                              <div className="property-image-wrapper">
                                <img
                                  src={
                                    property?.projectImg?.[0]?.imageInfo?.url
                                  }
                                  alt="Luxury Villa"
                                  className="img-fluid"
                                />

                                <div className="property-actions">
                                  <button
                                    className="action-btn share-btn"
                                    data-toggle="tooltip"
                                    title="Share Property"
                                  >
                                    <i className="bi bi-share"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="property-details">
                                <div className="property-header">
                                  <div className="property-price">
                                    {formatIndianNumber(
                                      property?.configuration?.[0]?.allInc
                                    )}
                                  </div>
                                  {/* <div className="property-type">House</div> */}
                                </div>
                                <h4 className="property-title">
                                  {property?.projectName}
                                </h4>
                                <p className="property-address">
                                  <i className="bi bi-geo-alt"></i>
                                  {property?.address}
                                </p>
                                <div className="property-specs">
                                  <div className="spec-item">
                                    <i className="bi bi-house-door"></i>
                                    <span>
                                      {property?.configuration?.length}{" "}
                                      Configuration
                                    </span>
                                  </div>
                                  <div className="spec-item">
                                    <i className="bi bi-building"></i>
                                    <span>{property?.noOfTower} Tower's</span>
                                  </div>
                                  <div className="spec-item">
                                    <i className="bi bi-arrows-angle-expand"></i>
                                    <span>
                                      {formatNumber(property?.reraAreaMax)} sq
                                      ft
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <hr />

                            <div className="property-details">
                              <strong>Developer Info</strong>
                              <div className="property-agent-info">
                                <Link
                                  to="property-details"
                                  className="property-link"
                                >
                                  <div className="agent-avatar">
                                    <img
                                      src={
                                        property?.groupDetails?.imageInfo?.url
                                      }
                                      alt="Agent"
                                    />
                                  </div>
                                  <div className="agent-details">
                                    <strong>
                                      {property?.groupDetails?.groupName}
                                    </strong>
                                    <span>
                                      {property?.groupDetails?.totalExperience}{" "}
                                      Experience
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <div
                                className="book-btn my-4"
                                data-bs-toggle="modal"
                                data-bs-target="#bookingNowBackdrop"
                                onClick={() =>
                                  setSelectPropertyId(property?._id)
                                }
                              >
                                <i class="bi bi-telephone mx-1"></i>Book Now
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="properties-rows view-rows">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="property-row-item">
                        <Link
                          to="property-details"
                          className="property-row-link"
                        >
                          <div className="row align-items-center">
                            <div className="col-lg-4">
                              <div className="property-image-wrapper">
                                <img
                                  src="assets/img/real-estate/property-exterior-2.webp"
                                  alt="Luxury Villa"
                                  className="img-fluid"
                                />
                                <div className="property-status">
                                  <span className="status-badge featured">
                                    Featured
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="property-row-content">
                                <div className="row align-items-center">
                                  <div className="col-lg-8">
                                    <div className="property-info">
                                      <div className="property-header">
                                        <h4 className="property-title">
                                          Luxury Modern Villa with Pool
                                        </h4>
                                        <div className="property-type-price">
                                          <span className="property-type">
                                            House
                                          </span>
                                          <span className="property-price">
                                            $1,850,000
                                          </span>
                                        </div>
                                      </div>
                                      <p className="property-address">
                                        <i className="bi bi-geo-alt"></i>
                                        3458 Sunset Boulevard, Beverly Hills, CA
                                        90210
                                      </p>
                                      <div className="property-specs">
                                        <span>
                                          <i className="bi bi-house-door"></i> 5
                                          Bed
                                        </span>
                                        <span>
                                          <i className="bi bi-droplet"></i> 4
                                          Bath
                                        </span>
                                        <span>
                                          <i className="bi bi-arrows-angle-expand"></i>{" "}
                                          3,400 sq ft
                                        </span>
                                      </div>
                                      <div className="property-agent">
                                        <img
                                          src="assets/img/real-estate/agent-2.webp"
                                          alt="Agent"
                                          className="agent-avatar"
                                        />
                                        <span>
                                          Jennifer Miller, Prime Realty Group
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="property-actions">
                                      <div className="action-buttons">
                                        <button className="action-btn favorite-btn">
                                          <i className="bi bi-heart"></i> Save
                                        </button>
                                        <button className="action-btn contact-btn">
                                          <i className="bi bi-telephone"></i>{" "}
                                          Call
                                        </button>
                                        <button className="action-btn gallery-btn">
                                          <i className="bi bi-images"></i> 14
                                          Photos
                                        </button>
                                      </div>
                                      <span className="btn btn-primary view-details-btn">
                                        View Details
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="property-row-item">
                        <Link
                          to="property-details"
                          className="property-row-link"
                        >
                          <div className="row align-items-center">
                            <div className="col-lg-4">
                              <div className="property-image-wrapper">
                                <img
                                  src="assets/img/real-estate/property-interior-1.webp"
                                  alt="Modern Apartment"
                                  className="img-fluid"
                                />
                                <div className="property-status">
                                  <span className="status-badge new">New</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="property-row-content">
                                <div className="row align-items-center">
                                  <div className="col-lg-8">
                                    <div className="property-info">
                                      <div className="property-header">
                                        <h4 className="property-title">
                                          Downtown Modern Penthouse
                                        </h4>
                                        <div className="property-type-price">
                                          <span className="property-type">
                                            Apartment
                                          </span>
                                          <span className="property-price">
                                            $5,200<small>/month</small>
                                          </span>
                                        </div>
                                      </div>
                                      <p className="property-address">
                                        <i className="bi bi-geo-alt"></i>
                                        1247 Broadway Street, Manhattan, NY
                                        10001
                                      </p>
                                      <div className="property-specs">
                                        <span>
                                          <i className="bi bi-house-door"></i> 3
                                          Bed
                                        </span>
                                        <span>
                                          <i className="bi bi-droplet"></i> 2
                                          Bath
                                        </span>
                                        <span>
                                          <i className="bi bi-arrows-angle-expand"></i>{" "}
                                          2,100 sq ft
                                        </span>
                                      </div>
                                      <div className="property-agent">
                                        <img
                                          src="assets/img/real-estate/agent-4.webp"
                                          alt="Agent"
                                          className="agent-avatar"
                                        />
                                        <span>
                                          Robert Thompson, Urban Living Realty
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="property-actions">
                                      <div className="action-buttons">
                                        <button className="action-btn favorite-btn">
                                          <i className="bi bi-heart"></i> Save
                                        </button>
                                        <button className="action-btn contact-btn">
                                          <i className="bi bi-telephone"></i>{" "}
                                          Call
                                        </button>
                                        <button className="action-btn gallery-btn">
                                          <i className="bi bi-images"></i> 9
                                          Photos
                                        </button>
                                      </div>
                                      <span className="btn btn-primary view-details-btn">
                                        View Details
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="property-row-item">
                        <Link
                          to="property-details"
                          className="property-row-link"
                        >
                          <div className="row align-items-center">
                            <div className="col-lg-4">
                              <div className="property-image-wrapper">
                                <img
                                  src="assets/img/real-estate/property-exterior-5.webp"
                                  alt="Family Home"
                                  className="img-fluid"
                                />
                                <div className="property-status">
                                  <span className="status-badge sale">
                                    For Sale
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="property-row-content">
                                <div className="row align-items-center">
                                  <div className="col-lg-8">
                                    <div className="property-info">
                                      <div className="property-header">
                                        <h4 className="property-title">
                                          Charming Family Home with Garden
                                        </h4>
                                        <div className="property-type-price">
                                          <span className="property-type">
                                            House
                                          </span>
                                          <span className="property-price">
                                            $975,000
                                          </span>
                                        </div>
                                      </div>
                                      <p className="property-address">
                                        <i className="bi bi-geo-alt"></i>
                                        892 Maple Grove Avenue, Austin, TX 73301
                                      </p>
                                      <div className="property-specs">
                                        <span>
                                          <i className="bi bi-house-door"></i> 4
                                          Bed
                                        </span>
                                        <span>
                                          <i className="bi bi-droplet"></i> 3
                                          Bath
                                        </span>
                                        <span>
                                          <i className="bi bi-arrows-angle-expand"></i>{" "}
                                          2,650 sq ft
                                        </span>
                                      </div>
                                      <div className="property-agent">
                                        <img
                                          src="assets/img/real-estate/agent-6.webp"
                                          alt="Agent"
                                          className="agent-avatar"
                                        />
                                        <span>
                                          Lisa Anderson, Texas Home Solutions
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="property-actions">
                                      <div className="action-buttons">
                                        <button className="action-btn favorite-btn">
                                          <i className="bi bi-heart"></i> Save
                                        </button>
                                        <button className="action-btn contact-btn">
                                          <i className="bi bi-telephone"></i>{" "}
                                          Call
                                        </button>
                                        <button className="action-btn gallery-btn">
                                          <i className="bi bi-images"></i> 11
                                          Photos
                                        </button>
                                      </div>
                                      <span className="btn btn-primary view-details-btn">
                                        View Details
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav
                className="pagination-wrapper mt-5"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <div className="pagination-info">
                      <p>
                        Showing <strong>1-6</strong> of{" "}
                        <strong>{totalCount}</strong> properties
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ul className="pagination justify-content-lg-end">
                      <li
                        className="page-item"
                        onClick={() => setActivePage(activePage - 1)}
                      >
                        <Link className="page-link" to="#">
                          <i className="bi bi-chevron-left"></i>
                        </Link>
                      </li>

                      {Array.from({ length: totatPages }, (_, i) => {
                        const pageNumber = i + 1; // pages start from 1
                        return (
                          <li
                            className={`page-item  ${i} ${
                              activePage === pageNumber ? "active" : ""
                            }`}
                            onClick={() => setActivePage(pageNumber)}
                          >
                            <Link className="page-link" to="#">
                              {i + 1}
                            </Link>
                          </li>
                        );
                      })}
                      <li
                        className="page-item"
                        onClick={() => setActivePage(activePage + 1)}
                      >
                        <Link className="page-link" to="#">
                          <i className="bi bi-chevron-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </>
          ) : (
            <h4>No Property Found</h4>
          )}
        </div>
      </section>

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

export default Properties;
