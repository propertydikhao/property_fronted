import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Layout = () => {
  useEffect(() => {
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    const mobileNavToogle = () => {
      document.body.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn?.classList.toggle("bi-list");
      mobileNavToggleBtn?.classList.toggle("bi-x");
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
    }

    /**
     * Toggle mobile nav dropdowns
     */
    const dropdowns = document.querySelectorAll(".navmenu .toggle-dropdown");
    dropdowns.forEach((navmenu) => {
      navmenu.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
        this.parentNode.nextElementSibling?.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      });
    });

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    const toggleScrolled = () => {
      const selectBody = document.body;
      const selectHeader = document.querySelector("#header");
      if (!selectHeader) return;
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add("scrolled")
        : selectBody.classList.remove("scrolled");
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    /**
     * Hide mobile nav on same-page/hash links
     */
    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => preloader.remove());
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    };
    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /**
     * Animation on scroll init
     */
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // ✅ Cleanup (to prevent multiple listeners)
    return () => {
      if (mobileNavToggleBtn)
        mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
      dropdowns.forEach((navmenu) =>
        navmenu.removeEventListener("click", mobileNavToogle)
      );
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
      window.removeEventListener("load", toggleScrollTop);
      document.removeEventListener("scroll", toggleScrollTop);
    };
  }, []); // ✅ Run once after mount

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
