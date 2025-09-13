import { Link } from "react-router-dom";
import CountUpAnimation from "../component/CountUp";

const Services = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Services</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="services" className="services section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service-block">
                <div className="service-content">
                  <div className="service-number">01</div>
                  <div className="service-info">
                    <h4>Buy Your Dream Home</h4>
                    <p>
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Nulla quis lorem ut libero malesuada feugiat. Proin
                      eget tortor risus.
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check-circle"></i> Personalized
                        Property Search
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Neighborhood
                        Analysis
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Closing
                        Assistance
                      </li>
                    </ul>
                    <Link to="service-details" className="service-btn">
                      Start Your Search <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="service-image">
                  <img
                    src="assets/img/real-estate/property-exterior-3.webp"
                    alt="Buy Dream Home"
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <i className="bi bi-house-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6" data-aos="fade-left" data-aos-delay="300">
              <div className="service-block">
                <div className="service-content">
                  <div className="service-number">02</div>
                  <div className="service-info">
                    <h4>Sell at Maximum Value</h4>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque habitant morbi tristique
                      senectus et netus.
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check-circle"></i> Professional
                        Photography
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Strategic
                        Marketing Plan
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Expert
                        Negotiation
                      </li>
                    </ul>
                    <Link to="service-details" className="service-btn">
                      Get Valuation <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="service-image">
                  <img
                    src="assets/img/real-estate/property-exterior-7.webp"
                    alt="Sell Property"
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="service-block">
                <div className="service-content">
                  <div className="service-number">03</div>
                  <div className="service-info">
                    <h4>Premium Rentals</h4>
                    <p>
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      lectus. Donec sollicitudin molestie malesuada. Quisque
                      velit nisi.
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check-circle"></i> Tenant Screening
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Flexible Lease
                        Terms
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> 24/7 Support
                      </li>
                    </ul>
                    <Link to="service-details" className="service-btn">
                      Browse Rentals <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="service-image">
                  <img
                    src="assets/img/real-estate/property-interior-5.webp"
                    alt="Premium Rentals"
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <i className="bi bi-key"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6" data-aos="fade-left" data-aos-delay="500">
              <div className="service-block">
                <div className="service-content">
                  <div className="service-number">04</div>
                  <div className="service-info">
                    <h4>Investment Consulting</h4>
                    <p>
                      Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                      dictum porta. Vivamus magna justo, lacinia eget
                      consectetur sed.
                    </p>
                    <ul className="service-features">
                      <li>
                        <i className="bi bi-check-circle"></i> Market Analysis
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> ROI Projections
                      </li>
                      <li>
                        <i className="bi bi-check-circle"></i> Portfolio
                        Diversification
                      </li>
                    </ul>
                    <Link to="service-details" className="service-btn">
                      Schedule Consultation{" "}
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="service-image">
                  <img
                    src="assets/img/real-estate/features-2.webp"
                    alt="Investment Consulting"
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="600">
              <div className="cta-section">
                <div className="cta-content">
                  <h3>Ready to Make Your Move?</h3>
                  <p>
                    Connect with our experienced team today and discover how we
                    can help you achieve your real estate goals.
                  </p>
                  <div className="cta-buttons">
                    <Link to="contact" className="btn-primary">
                      Contact Us Today
                    </Link>
                    <Link to="tel:+1234567890" className="btn-secondary">
                      <i className="bi bi-telephone"></i> Call Now
                    </Link>
                  </div>
                </div>
                <div className="cta-stats">
                  <div className="stat-item">
                    <div className="stat-number">
                      <CountUpAnimation end={500} />+
                    </div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <CountUpAnimation end={15} />+
                    </div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <CountUpAnimation end={98} />%
                    </div>
                    <div className="stat-label">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
