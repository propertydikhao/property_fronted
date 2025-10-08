import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Contact</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="contact-2" className="contact-2 section">
        <div className="map-container mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.308357448438!2d72.85455777601894!3d19.31242124450635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02a035251cd%3A0xaf6b0e0e8746c565!2sNirmal%20Kunj%2C%20Navghar%20cross%20road%2C%20SV%20Rd%2C%20Asha%20Nagar%2C%20Rahul%20Park%2C%20Bhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401105!5e0!3m2!1sen!2sin!4v1759944750916!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay="300">
            <div className="col-md-6">
              <div className="contact-info-card">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>
                    04 NIRMAL KUNJ CHSL , S.V ROAD NEAR NARESH STEEL CENTER
                    BHAYANDER EAST 401105{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="contact-info-card">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="info-content">
                  <h4>Phone &amp; Email</h4>
                  <p>+91 9004338424</p>
                  <p>propertydikhao@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-10">
              <div className="contact-form-wrapper">
                <h2 className="text-center mb-4">Send a Message</h2>

                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Your Message"
                          rows="6"
                          required=""
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn-submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
