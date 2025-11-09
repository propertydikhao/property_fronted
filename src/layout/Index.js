import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.initialize("G-32FG39X2S5"); // your GA tracking ID
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, []);
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
