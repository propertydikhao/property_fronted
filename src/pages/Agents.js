import { Link } from "react-router-dom";

const Agents = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Agents</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Agents</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="agents" className="agents section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-1.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="top-seller-badge">Top Seller</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>Sarah Martinez</h4>
                  <span className="role">Senior Property Advisor</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vDowntown Miami
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">Luxury Homes</span>
                    <span className="specialty-tag">Condos</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234567">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:sarah@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-2.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="verified-badge">Verified</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>Michael Thompson</h4>
                  <span className="role">Commercial Specialist</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vBrickell Avenue
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">Commercial</span>
                    <span className="specialty-tag">Investment</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234568">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:michael@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-3.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="new-agent-badge">New Agent</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>Emma Rodriguez</h4>
                  <span className="role">Residential Expert</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vCoral Gables
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">First-Time Buyers</span>
                    <span className="specialty-tag">Families</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234569">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:emma@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-4.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="awarded-badge">Award Winner</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>James Wilson</h4>
                  <span className="role">Luxury Property Consultant</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vSouth Beach
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">Waterfront</span>
                    <span className="specialty-tag">Penthouses</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234570">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:james@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-5.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="top-seller-badge">Top Seller</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>Lisa Chen</h4>
                  <span className="role">International Sales Manager</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vDesign District
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">International</span>
                    <span className="specialty-tag">Mandarin</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234571">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:lisa@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-wechat"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-6.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="verified-badge">Verified</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>David Garcia</h4>
                  <span className="role">Property Investment Advisor</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vAventura
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">Investment</span>
                    <span className="specialty-tag">Spanish</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234572">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:david@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-7.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="awarded-badge">Award Winner</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>Rachel Porter</h4>
                  <span className="role">Rental Specialist</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vMidtown Miami
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">Rentals</span>
                    <span className="specialty-tag">Young Professionals</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234573">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:rachel@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="agent-card">
                <div className="agent-image">
                  <img
                    src="assets/img/real-estate/agent-8.webp"
                    alt="Agent"
                    className="img-fluid"
                  />
                  <div className="badge-overlay">
                    <span className="new-agent-badge">New Agent</span>
                  </div>
                </div>
                <div className="agent-info">
                  <h4>Alexa Johnson</h4>
                  <span className="role">New Construction Specialist</span>
                  <p className="location">
                    <i className="bi bi-geo-alt"></i>vWynwood
                  </p>
                  <div className="specialties">
                    <span className="specialty-tag">New Construction</span>
                    <span className="specialty-tag">Modern Homes</span>
                  </div>
                  <div className="contact-links">
                    <Link to="tel:+15551234574">
                      <i className="bi bi-telephone"></i>
                    </Link>
                    <Link to="mailto:alex@example.com">
                      <i className="bi bi-envelope"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link to="#">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </div>
                  <Link to="#" className="view-listings-btn">
                    View Listings
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
            <Link to="#" className="btn-view-all-agents">
              View All Agents
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agents;
