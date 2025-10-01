import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer accent-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">PropertyDikhao</span>
            </Link>
            <ul className="footer-links p-0" style={{listStyle:"none"}}>
              <li>Rera No. : A011332500604</li>
              <li>Write to us : support@property.in</li>
            </ul>
            <div className="social-links d-flex mt-4">
              <Link
                to="https://www.youtube.com/@propertydikhao"
                target="_blank"
              >
                <i className="bi bi-youtube fs-6"></i>
              </Link>
              <Link
                to="https://www.facebook.com/propertydikhao"
                target="_blank"
              >
                <i className="bi bi-facebook fs-6"></i>
              </Link>
              <Link
                to="https://www.instagram.com/propertydikhao/"
                target="_blank"
              >
                <i className="bi bi-instagram fs-6"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/property-dikhao-617a281b5/"
                target="_blank"
              >
                <i className="bi bi-linkedin fs-6"></i>
              </Link>
              <Link to="https://x.com/prpertydikhao" target="_blank">
                <i className="bi bi-twitter-x fs-6"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/properties">Properties</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="#">Home Interior</Link>
              </li>
              <li>
                <Link href="#">Home Loan</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Working City</h4>
            <p>Mumbai</p>
            <p>Navi Mumbai</p>
            <p>Thane</p>
            <p>Palghar</p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">PropertyDikhao</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
