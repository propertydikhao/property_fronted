import { Link } from "react-router-dom";
import Input from "../component/Input";
import Button from "../component/Button";
import UploadFile from "../component/Fileupload";
import { useState } from "react";
import { apiFetch, capitaliseWords, modalClose } from "../utils/utils";
import Toast from "../component/Toast";
import { useDispatch, useSelector } from "react-redux";
import { isToastShow } from "../redux/slice/toastSlice";
import { userInfo } from "../redux/slice/userSlice";
import Loading from "../component/Loading";
import { isLoadingShow } from "../redux/slice/loadingSlice";
import UserLocation from "../utils/userLocation";

const Header = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state?.user?.userInfo);

  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [otp, setOTP] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");

  const verifyOtp = async () => {
    dispatch(isLoadingShow({ isShow: true }));

    try {
      if (mobileNo && otp) {
        let payload = {
          mobileNo,
          otp,
        };
        const userData = await apiFetch("/api/user/login", payload);
        if (userData?.success) {
          dispatch(
            isToastShow({
              isShow: true,
              type: "success",
              message: userData?.message,
            })
          );
          dispatch(userInfo(userData));
          setMobileNo("");
          setOTP("");
          modalClose("loginstaticBackdrop");
          dispatch(isLoadingShow({ isShow: false }));
        } else {
          dispatch(
            isToastShow({
              isShow: true,
              type: "error",
              message: userData?.message,
            })
          );
          dispatch(isLoadingShow({ isShow: false }));
        }
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: "Enter Mobile and OTP",
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

  const uploadProfile = (event) => {
    setUserProfile(event.target.files[0]);
  };

  const registerUser = async () => {
    dispatch(isLoadingShow({ isShow: true }));
    try {
      if (fullName && mobileNo) {
        const data = new FormData();
        data.append("fullName", fullName);
        data.append("mobileNo", mobileNo);
        data.append("userProfile", userProfile);

        const userData = await apiFetch("/api/user/register", data);
        if (userData?.success) {
          dispatch(
            isToastShow({
              isShow: true,
              type: "success",
              message: userData?.message,
            })
          );
          setFullName("");
          setMobileNo("");
          setUserProfile("");
          modalClose("registerstaticBackdrop");
          dispatch(isLoadingShow({ isShow: true }));
        } else {
          dispatch(
            isToastShow({
              isShow: true,
              type: "error",
              message: userData?.message,
            })
          );
          dispatch(isLoadingShow({ isShow: true }));
        }
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: "Please Enter Fullname, Mobile",
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

  const logout = async () => {
    try {
      const userData = await apiFetch("/api/user/logout");
      if (userData?.success) {
        dispatch(
          isToastShow({
            isShow: true,
            type: "success",
            message: userData?.message,
          })
        );
        dispatch(userInfo(null));
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: userData?.message,
          })
        );
      }
    } catch (error) {}
  };
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <svg
              className="my-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bgCarrier" strokeWidth="0"></g>
              <g
                id="tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="iconCarrier">
                <path
                  d="M22 22L2 22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M4 22V9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M20 9.5V13.5M20 22V17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
              </g>
            </svg>
            <h1 className="sitename">HomeSpace</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li onClick={() => setActiveMenu("home")}>
                <Link to="/" className={activeMenu === "home" ? "active" : ""}>
                  Home
                </Link>
              </li>

              <li onClick={() => setActiveMenu("about")}>
                <Link
                  to="/about"
                  className={activeMenu === "about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li onClick={() => setActiveMenu("properties")}>
                <Link
                  to="/properties"
                  className={activeMenu === "properties" ? "active" : ""}
                >
                  Properties
                </Link>
              </li>
              <li onClick={() => setActiveMenu("services")}>
                <Link
                  to="/services"
                  className={activeMenu === "services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li onClick={() => setActiveMenu("agents")}>
                <Link
                  to="/agents"
                  className={activeMenu === "agents" ? "active" : ""}
                >
                  Agents
                </Link>
              </li>
              <li onClick={() => setActiveMenu("blog")}>
                <Link
                  to="/blog"
                  className={activeMenu === "blog" ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li onClick={() => setActiveMenu("contact")}>
                <Link
                  to="/contact"
                  className={activeMenu === "contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
              <hr className="text-black" />
              {userState?.isLogin ? (
                <li className="dropdown">
                  <Link to="/#">
                    {!useState?.uploadPath ? (
                      <div className="d-flex align-items-center">
                        <span className="nameAvatar me-2">s</span>
                        <span>{capitaliseWords(userState?.fullName)}</span>
                      </div>
                    ) : (
                      <img alt="Agent Profile" src="" />
                    )}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/#" onClick={() => logout()}>
                        <div className="d-flex align-items-center">
                          Logout
                          <i className="bi bi-box-arrow-in-right fs-5 me-1"></i>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="#">
                      <div className="d-flex align-items-center">
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#loginstaticBackdrop"
                        >
                          Login
                        </span>
                        <i className="bi bi-box-arrow-in-right me-1"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="d-flex align-items-center">
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#registerstaticBackdrop"
                        >
                          Register
                        </span>
                        <i className="bi bi-box-arrow-in-right me-1"></i>
                      </div>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      {/* register modal */}

      <div
        className="modal fade"
        id="registerstaticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="registerstaticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerstaticBackdropLabel">
                New User Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="p-10 d-flex flex-column gap-3 align-center">
                <Input
                  label={"Full Name"}
                  id="fullname"
                  type="text"
                  name="fullname"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={true}
                  icon={<i className="bi bi-person field-icon"></i>}
                />
                <Input
                  label={" Mobile No."}
                  id="mobile_no"
                  type="number"
                  name="mobile_no"
                  placeholder="Enter Mobile No."
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  required={true}
                  icon={<i className="bi bi-telephone field-icon"></i>}
                />
                <UploadFile
                  id="user-logo"
                  title="Upload Logo"
                  isMultiple={false}
                  name="user_logo"
                  onChange={(event) => uploadProfile(event)}
                />
                <div onClick={() => registerUser()}>
                  <Button
                    type="submit"
                    label="Register"
                    icon={<i className="bi bi-person-check fs-5"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* login modal */}

      <div
        className="modal fade"
        id="loginstaticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="loginstaticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginstaticBackdropLabel">
                Login User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="p-10 d-flex flex-column gap-3 ">
                <Input
                  label={" Mobile No."}
                  id="mobile_no"
                  type="number"
                  name="mobileNo"
                  placeholder="Enter Mobile No."
                  required={true}
                  icon={<i className="bi bi-telephone field-icon"></i>}
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />

                <Button
                  type="#"
                  label="GET OTP"
                  icon={<i className="bi bi-key me-2"></i>}
                />

                <Input
                  label={"OTP"}
                  id="otp"
                  type="password"
                  name="otp"
                  placeholder="*****"
                  required={true}
                  icon={<i className="bi bi-shield-lock field-icon"></i>}
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />

                <div onClick={() => verifyOtp()}>
                  <Button
                    type="#"
                    label="Verify OTP"
                    icon={<i className="bi bi-key me-2"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
