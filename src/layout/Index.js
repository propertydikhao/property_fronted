import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {

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
