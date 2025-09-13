import { Link } from "react-router-dom";
import CountUpAnimation from "../component/CountUp";

const About = () => {

  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">About</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="index">Home</Link>
              </li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="hero-content text-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h2>Premium Real Estate Excellence Since 2008</h2>
                <p className="hero-description">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Mauris viverra veniam ut
                  aliquam lorem dapibus gravida. Sed efficitur mauris vel magna
                  consectetur tempor.
                </p>
              </div>

              <div
                className="dual-image-layout"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="primary-image-wrap">
                      <img
                        src="assets/img/real-estate/property-exterior-4.webp"
                        alt="Luxury Property"
                        className="img-fluid"
                      />
                      <div
                        className="floating-badge"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                      >
                        <div className="badge-content">
                          <i className="bi bi-award"></i>
                          <span>Top Rated Agency</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="secondary-image-wrap">
                      <img
                        src="assets/img/real-estate/agent-3.webp"
                        alt="Professional Agent"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="features-showcase"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div
                  className="feature-box"
                  data-aos="flip-up"
                  data-aos-delay="400"
                >
                  <div className="feature-icon">
                    <i className="bi bi-house-door"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Residential Sales</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="feature-box"
                  data-aos="flip-up"
                  data-aos-delay="450"
                >
                  <div className="feature-icon">
                    <i className="bi bi-building"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Commercial Properties</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="feature-box"
                  data-aos="flip-up"
                  data-aos-delay="500"
                >
                  <div className="feature-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Investment Guidance</h4>
                    <p>
                      Totam rem aperiam eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="feature-box"
                  data-aos="flip-up"
                  data-aos-delay="550"
                >
                  <div className="feature-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Legal Support</h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="metrics-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="metrics-wrapper">
                  <div className="row text-center">
                    <div className="col-lg-3 col-6">
                      <div
                        className="metric-item"
                        data-aos="zoom-in"
                        data-aos-delay="450"
                      >
                        <div className="metric-icon">
                          <i className="bi bi-trophy"></i>
                        </div>
                        <div className="metric-value">
                          <CountUpAnimation end={1250} />+
                        </div>
                        <div className="metric-label">Successful Sales</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div
                        className="metric-item"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                      >
                        <div className="metric-icon">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="metric-value">
                          <CountUpAnimation end={950} />+
                        </div>
                        <div className="metric-label">Happy Clients</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div
                        className="metric-item"
                        data-aos="zoom-in"
                        data-aos-delay="550"
                      >
                        <div className="metric-icon">
                          <i className="bi bi-calendar-check"></i>
                        </div>
                        <div className="metric-value">
                          <CountUpAnimation end={6} />
                        </div>
                        <div className="metric-label">Years in Business</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div
                        className="metric-item"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                      >
                        <div className="metric-icon">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="metric-value">4.9</div>
                        <div className="metric-label">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-highlight"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <i className="bi bi-chat-quote"></i>
                  </div>
                  <blockquote>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet consectetur adipisci velit sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem."
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img
                        src="assets/img/person/person-f-8.webp"
                        alt="Client"
                        className="img-fluid"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Jennifer Rodriguez</h5>
                      <span>Property Investor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section" data-aos="fade-up" data-aos-delay="500">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h3>Ready to Find Your Dream Property?</h3>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur.
                </p>
                <div className="action-buttons">
                  <Link to="contact" className="btn btn-primary">
                    Get Started Today
                  </Link>
                  <Link to="properties" className="btn btn-secondary">
                    Browse Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
