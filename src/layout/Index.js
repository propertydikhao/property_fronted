import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoadingShow } from "../redux/slice/loadingSlice";
import Toast from "../component/Toast";
import Loading from "../component/Loading";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(isLoadingShow({ isShow: true }))
    
    setTimeout(() => {
    dispatch(isLoadingShow({ isShow: false }));
      
    }, 1000);
  }, [location]);
  
  return (
    <div className="app-layout">
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
