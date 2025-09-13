import { Link } from "react-router-dom";

const ServiceDetials = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Service Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Service Details</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="service-details" className="service-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-content">
                <div
                  className="service-hero"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <img
                    src="assets/img/real-estate/property-exterior-8.webp"
                    alt="Property Sales Service"
                    className="img-fluid rounded"
                  />
                  <div className="service-badge">
                    <i className="bi bi-house-door"></i>
                    Premium Service
                  </div>
                </div>

                <div
                  className="service-overview"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Professional Property Sales</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>

                  <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Pellentesque in ipsum id orci porta dapibus. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui.
                    Donec sollicitudin molestie malesuada.
                  </p>

                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus. Nulla porttitor accumsan tincidunt.
                  </p>
                </div>

                <div
                  className="service-features"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <h3>What's Included</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-search"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Market Analysis</h5>
                          <p>
                            Comprehensive market research and competitive
                            pricing analysis for optimal property positioning.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-camera"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Professional Photography</h5>
                          <p>
                            High-quality photos and virtual tours to showcase
                            your property in the best light.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-megaphone"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Marketing Campaign</h5>
                          <p>
                            Multi-channel marketing strategy including online
                            listings, social media, and print advertising.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="bi bi-handshake"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Negotiation Support</h5>
                          <p>
                            Expert negotiation to secure the best possible price
                            and terms for your property sale.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="service-process"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3>Our Process</h3>
                  <div className="process-steps">
                    <div className="process-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h5>Initial Consultation</h5>
                        <p>
                          We meet to discuss your goals, timeline, and property
                          details to create a customized selling strategy.
                        </p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h5>Property Preparation</h5>
                        <p>
                          Professional staging advice, photography, and
                          marketing materials preparation for maximum appeal.
                        </p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h5>Market Launch</h5>
                        <p>
                          Strategic listing across multiple platforms with
                          targeted marketing to reach qualified buyers.
                        </p>
                      </div>
                    </div>
                    <div className="process-step">
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h5>Closing Support</h5>
                        <p>
                          Full support through negotiations, inspections, and
                          closing to ensure a smooth transaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="service-stats"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <h3>Our Track Record</h3>
                  <div className="row g-4">
                    <div className="col-md-3 col-6">
                      <div className="stat-item">
                        <div className="stat-number">
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="847"
                            data-purecounter-duration="2"
                            className="purecounter"
                          ></span>
                        </div>
                        <div className="stat-label">Properties Sold</div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="stat-item">
                        <div className="stat-number">
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="98"
                            data-purecounter-duration="2"
                            className="purecounter"
                          ></span>
                          %
                        </div>
                        <div className="stat-label">Success Rate</div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="stat-item">
                        <div className="stat-number">
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="23"
                            data-purecounter-duration="2"
                            className="purecounter"
                          ></span>
                        </div>
                        <div className="stat-label">Days Average</div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="stat-item">
                        <div className="stat-number">
                          <span
                            data-purecounter-start="0"
                            data-purecounter-end="15"
                            data-purecounter-duration="2"
                            className="purecounter"
                          ></span>
                        </div>
                        <div className="stat-label">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div
                  className="contact-form-widget"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h4>Get Started Today</h4>
                  <p>
                    Ready to sell your property? Contact us for a free
                    consultation and market analysis.
                  </p>

                  <form
                    action="forms/contact.php"
                    method="post"
                    className="php-email-form"
                  >
                    <input
                      type="hidden"
                      name="subject"
                      value="Consultation Request"
                    />
                    <div className="row gy-3">
                      <div className="col-12">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Your Phone"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          className="form-control"
                          rows="4"
                          placeholder="Tell us about your property or questions..."
                          required=""
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                          Request Consultation
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div
                  className="quick-info-widget"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <h4>Quick Facts</h4>
                  <ul className="info-list">
                    <li>
                      <i className="bi bi-clock"></i>
                      <span>Free Initial Consultation</span>
                    </li>
                    <li>
                      <i className="bi bi-shield-check"></i>
                      <span>Licensed &amp; Insured</span>
                    </li>
                    <li>
                      <i className="bi bi-award"></i>
                      <span>Award-Winning Team</span>
                    </li>
                    <li>
                      <i className="bi bi-graph-up"></i>
                      <span>Above Market Results</span>
                    </li>
                    <li>
                      <i className="bi bi-headset"></i>
                      <span>24/7 Support</span>
                    </li>
                  </ul>
                </div>

                <div
                  className="testimonial-widget"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4>What Clients Say</h4>
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <p>
                        "Outstanding service! They sold our home in just 18 days
                        and got us 5% above asking price. Highly recommended!"
                      </p>
                    </div>
                    <div className="testimonial-author">
                      <img
                        src="assets/img/person/person-f-8.webp"
                        alt="Sarah Johnson"
                        className="rounded-circle"
                      />
                      <div className="author-info">
                        <h6>Sarah Johnson</h6>
                        <span>Homeowner</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="related-services-widget"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <h4>Related Services</h4>
                  <div className="service-links">
                    <Link to="#" className="service-link">
                      <i className="bi bi-house-add"></i>
                      <span>Property Buying</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="#" className="service-link">
                      <i className="bi bi-calculator"></i>
                      <span>Property Valuation</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="#" className="service-link">
                      <i className="bi bi-key"></i>
                      <span>Property Management</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="#" className="service-link">
                      <i className="bi bi-graph-up-arrow"></i>
                      <span>Investment Consulting</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
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

export default ServiceDetials;
