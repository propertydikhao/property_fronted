import { Link } from "react-router-dom";
import CountUpAnimation from "../component/CountUp";
import Input from "../component/Input";
import Dropdown from "../component/Dropdown";
import Button from "../component/Button";

const Home = () => {
  const propertyOption = [
    {
      label: "Select Option",
      value: "",
    },
    {
      label: "Single House",
      value: "house",
    },
    {
      label: "Apartment",
      value: "apartment",
    },
    {
      label: "Condominium",
      value: "condo",
    },
    {
      label: "Villa",
      value: "villa",
    },
    {
      label: "Commercial",
      value: "commercial",
    },
  ];

  const budgetOption = [
    {
      label: "Any Price",
      value: "",
    },
    {
      label: "Under $300K",
      value: "0-300000",
    },
    {
      label: "$300K - $600K",
      value: "300000-600000",
    },
    {
      label: "$600K - $900K",
      value: "600000-900000",
    },
    {
      label: "$900K - $1.5M",
      value: "900000-1500000",
    },
    {
      label: "Above $1.5M",
      value: "1500000",
    },
  ];

   const roomOption = [
    {
      label: "Any Room",
      value: "",
    },
    {
      label: "1 Room",
      value: "1",
    },
    {
      label: "2 Room",
      value: "2",
    },
    {
      label: "3 Room",
      value: "3",
    },
    {
      label: "4 Room",
      value: "4",
    },
    {
      label: "5+ Room",
      value: "5",
    },
  ];


  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-wrapper">
            <div className="row g-4">
              <div className="col-lg-7">
                <div
                  className="hero-content"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="content-header">
                    <span className="hero-label">
                      <i className="bi bi-house-heart"></i>
                      Dream Homes Await
                    </span>
                    <h1>Find Your Ideal Property with Expert Guidance</h1>
                    <p>
                      To receive the best service, connect with verified real
                      estate professionals who are committed to providing
                      reliable support and solutions.
                    </p>
                  </div>

                  <div
                    className="search-container"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="search-header">
                      <h3>Start Your Property Search</h3>
                      <p>Discover thousands of verified listings</p>
                    </div>

                    <form action="" className="property-search-form">
                      <div className="search-grid">
                        <Input
                          label={"Location"}
                          id="search-location"
                          type="text"
                          name="location"
                          placeholder="Enter city or neighborhood"
                          required={false}
                          icon={<i className="bi bi-geo-alt field-icon"></i>}
                        />

                        <Dropdown
                          label={"Property Type"}
                          id="search-type"
                          name="property_type"
                          required={false}
                          option={propertyOption}
                          icon={<i className="bi bi-building field-icon"></i>}
                        />

                        <Dropdown
                          label={"Budget Range"}
                          id="search-budget"
                          name="price_range"
                          required={false}
                          option={budgetOption}
                          icon={
                            <i className="bi bi-currency-dollar field-icon"></i>
                          }
                        />

                        <Dropdown
                          label={"Bedrooms"}
                          id="search-rooms"
                          name="bedrooms"
                          required={false}
                          option={roomOption}
                          icon={<i className="bi bi-door-open field-icon"></i>}
                        />
                      </div>

                      <Button
                        type="submit"
                        icon={<i className="bi bi-search"></i>}
                        label="Find Properties"
                      />
                    </form>
                  </div>

                  <div
                    className="achievement-grid"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="achievement-item">
                      <div className="achievement-number">
                        <CountUpAnimation end={1250} />+
                      </div>
                      <span className="achievement-text">Active Listings</span>
                    </div>
                    <div className="achievement-item">
                      <div className="achievement-number">
                        <CountUpAnimation end={50} />+
                      </div>
                      <span className="achievement-text">Expert Agentss</span>
                    </div>

                    <div className="achievement-item">
                      <div className="achievement-number">
                        <CountUpAnimation end={96} />+
                      </div>
                      <span className="achievement-text">Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div
                  className="hero-visual"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="visual-container">
                    <div className="featured-property">
                      <img
                        src="assets/img/real-estate/property-exterior-8.webp"
                        alt="Featured Property"
                        className="img-fluid"
                      />
                      <div className="property-info">
                        <div className="property-price">$925,000</div>
                        <div className="property-details">
                          <span>
                            <i className="bi bi-geo-alt"></i> Downtown District
                          </span>
                          <span>
                            <i className="bi bi-house"></i> 4 Bed, 3 Bath
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="overlay-images">
                      <div className="overlay-img overlay-1">
                        <img
                          src="assets/img/real-estate/property-interior-4.webp"
                          alt="Interior View"
                          className="img-fluid"
                        />
                      </div>
                      <div className="overlay-img overlay-2">
                        <img
                          src="assets/img/real-estate/property-exterior-2.webp"
                          alt="Exterior View"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="agent-card">
                      <div className="agent-profile">
                        <img
                          src="assets/img/real-estate/agent-7.webp"
                          alt="Agent Profile"
                          className="agent-photo"
                        />
                        <div className="agent-info">
                          <h4>Michael Chen</h4>
                          <p>Senior Property Advisor</p>
                          <div className="agent-rating">
                            <div className="stars">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span className="rating-text">
                              5.0 (94 reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="contact-agent-btn">
                        <i className="bi bi-chat-dots"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-about" className="home-about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="image-gallery">
                <div className="primary-image">
                  <img
                    src="assets/img/real-estate/property-exterior-1.webp"
                    alt="Modern Property"
                    className="img-fluid"
                  />
                  <div className="experience-badge">
                    <div className="badge-content">
                      <div className="number">
                        <CountUpAnimation end={15} />+
                      </div>
                      <div className="text">
                        Years
                        <br />
                        Experience
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secondary-image">
                  <img
                    src="assets/img/real-estate/property-interior-4.webp"
                    alt="Luxury Interior"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
              <div className="content">
                <div className="section-header">
                  <span className="section-label">About Our Company</span>
                  <h2>Building Dreams, Creating Homes Since 2008</h2>
                </div>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <div className="achievements-list">
                  <div className="achievement-item">
                    <div className="achievement-icon">
                      <i className="bi bi-house-door"></i>
                    </div>
                    <div className="achievement-content">
                      <h4>
                        <CountUpAnimation end={3200} />+ Properties Sold
                      </h4>
                      <p>Successfully completed transactions</p>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="achievement-content">
                      <h4>
                        <CountUpAnimation end={96} />% Client Satisfaction
                      </h4>
                      <p>Happy customers recommend us</p>
                    </div>
                  </div>
                </div>

                <div className="action-section">
                  <Link to="about" className="btn-cta">
                    <span>Discover Our Story</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <div className="contact-info">
                    <div className="contact-icon">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="contact-details">
                      <span>Call us today</span>
                      <strong>+1 (555) 123-4567</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-properties" className="featured-properties section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Featured Properties</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div
                className="featured-property-main"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="property-hero">
                  <img
                    src="assets/img/real-estate/property-exterior-4.webp"
                    alt="Luxury Estate"
                    className="img-fluid"
                  />
                  <div className="property-overlay">
                    <div className="property-badge-main premium">Premium</div>
                    <div className="property-stats">
                      <div className="stat-item">
                        <i className="bi bi-house-door"></i>
                        <span>6 Bedrooms</span>
                      </div>
                      <div className="stat-item">
                        <i className="bi bi-droplet-fill"></i>
                        <span>5 Bathrooms</span>
                      </div>
                      <div className="stat-item">
                        <i className="bi bi-arrows-move"></i>
                        <span>5,500 sq ft</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-hero-content">
                  <div className="property-header">
                    <div className="property-info">
                      <h2>
                        <Link to="property-details">
                          Magnificent Estate with Garden Views
                        </Link>
                      </h2>
                      <div className="property-address">
                        <i className="bi bi-geo-alt-fill"></i>
                        <span>Malibu, CA 90265</span>
                      </div>
                    </div>
                    <div className="property-price-main">$4,850,000</div>
                  </div>
                  <p className="property-description">
                    Luxurious estate nestled in exclusive Malibu hills featuring
                    panoramic ocean views, infinity pool, wine cellar, and
                    private tennis court. Architectural masterpiece with premium
                    finishes throughout.
                  </p>
                  <div className="property-actions-main">
                    <Link to="property-details" className="btn-primary-custom">
                      Schedule Tour
                    </Link>
                    <Link to="property-details" className="btn-outline-custom">
                      View Gallery
                    </Link>
                    <div className="property-listing-info">
                      <span className="listing-status for-sale">For Sale</span>
                      <span className="listing-date">Listed today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="properties-sidebar">
                <div
                  className="sidebar-property-card"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="sidebar-property-image">
                    <img
                      src="assets/img/real-estate/property-exterior-1.webp"
                      alt="Modern Condo"
                      className="img-fluid"
                    />
                    <div className="sidebar-property-badge hot">Hot Deal</div>
                  </div>
                  <div className="sidebar-property-content">
                    <h4>
                      <Link to="property-details">
                        Contemporary Downtown Condo
                      </Link>
                    </h4>
                    <div className="sidebar-location">
                      <i className="bi bi-pin-map"></i>
                      <span>Seattle, WA 98101</span>
                    </div>
                    <div className="sidebar-specs">
                      <span>
                        <i className="bi bi-house"></i> 3 BR
                      </span>
                      <span>
                        <i className="bi bi-droplet"></i> 2 BA
                      </span>
                      <span>
                        <i className="bi bi-rulers"></i> 2,100 sq ft
                      </span>
                    </div>
                    <div className="sidebar-price-row">
                      <div className="sidebar-price">$1,595,000</div>
                      <Link to="property-details" className="sidebar-btn">
                        View
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="sidebar-property-card"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="sidebar-property-image">
                    <img
                      src="assets/img/real-estate/property-exterior-9.webp"
                      alt="Family Home"
                      className="img-fluid"
                    />
                    <div className="sidebar-property-badge new">
                      New Listing
                    </div>
                  </div>
                  <div className="sidebar-property-content">
                    <h4>
                      <Link to="property-details">
                        Elegant Family Residence
                      </Link>
                    </h4>
                    <div className="sidebar-location">
                      <i className="bi bi-pin-map"></i>
                      <span>Portland, OR 97201</span>
                    </div>
                    <div className="sidebar-specs">
                      <span>
                        <i className="bi bi-house"></i> 4 BR
                      </span>
                      <span>
                        <i className="bi bi-droplet"></i> 3 BA
                      </span>
                      <span>
                        <i className="bi bi-rulers"></i> 3,100 sq ft
                      </span>
                    </div>
                    <div className="sidebar-price-row">
                      <div className="sidebar-price">$925,000</div>
                      <Link to="property-details" className="sidebar-btn">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-4">
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="600">
              <div className="property-card-horizontal">
                <div className="property-image-horizontal">
                  <img
                    src="assets/img/real-estate/property-interior-5.webp"
                    alt="Penthouse"
                    className="img-fluid"
                  />
                  <div className="property-badge-horizontal exclusive">
                    Exclusive
                  </div>
                </div>
                <div className="property-content-horizontal">
                  <h3>
                    <Link to="property-details">Luxury Penthouse Suite</Link>
                  </h3>
                  <div className="property-location-horizontal">
                    <i className="bi bi-geo-alt"></i>
                    <span>Las Vegas, NV 89102</span>
                  </div>
                  <div className="property-features">
                    <span className="feature">
                      <i className="bi bi-house"></i> 3 Bedrooms
                    </span>
                    <span className="feature">
                      <i className="bi bi-droplet"></i> 3 Bathrooms
                    </span>
                    <span className="feature">
                      <i className="bi bi-rulers"></i> 2,850 sq ft
                    </span>
                  </div>
                  <p>
                    Spectacular penthouse with floor-to-ceiling windows and
                    private rooftop terrace overlooking the city skyline.
                  </p>
                  <div className="property-footer-horizontal">
                    <div className="property-price-horizontal">$2,195,000</div>
                    <Link to="property-details" className="btn-view-horizontal">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="700">
              <div className="property-card-horizontal">
                <div className="property-image-horizontal">
                  <img
                    src="assets/img/real-estate/property-interior-8.webp"
                    alt="Modern Home"
                    className="img-fluid"
                  />
                  <div className="property-badge-horizontal new">New</div>
                </div>
                <div className="property-content-horizontal">
                  <h3>
                    <Link to="property-details">Modern Architectural Gem</Link>
                  </h3>
                  <div className="property-location-horizontal">
                    <i className="bi bi-geo-alt"></i>
                    <span>Phoenix, AZ 85001</span>
                  </div>
                  <div className="property-features">
                    <span className="feature">
                      <i className="bi bi-house"></i> 4 Bedrooms
                    </span>
                    <span className="feature">
                      <i className="bi bi-droplet"></i> 3 Bathrooms
                    </span>
                    <span className="feature">
                      <i className="bi bi-rulers"></i> 3,450 sq ft
                    </span>
                  </div>
                  <p>
                    Award-winning contemporary design with sustainable features,
                    smart home technology, and resort-style backyard.
                  </p>
                  <div className="property-footer-horizontal">
                    <div className="property-price-horizontal">$1,375,000</div>
                    <Link to="property-details" className="btn-view-horizontal">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-services" className="featured-services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Featured Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-search"></i>
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="service-details">Property Search</Link>
                  </h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit anim id est laborum
                  </p>
                  <ul className="service-highlights">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Comprehensive
                      Listings
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Advanced
                      Filtering
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Virtual Tours
                    </li>
                  </ul>
                  <Link to="service-details" className="service-link">
                    <span>Explore Now</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="service-visual">
                  <img
                    src="assets/img/real-estate/property-interior-2.webp"
                    className="img-fluid"
                    alt="Property Search"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-calculator"></i>
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="service-details">Property Valuation</Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam
                  </p>
                  <ul className="service-highlights">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Market
                      Analysis
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Comparative
                      Reports
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Investment
                      Insights
                    </li>
                  </ul>
                  <Link to="service-details" className="service-link">
                    <span>Get Valuation</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="service-visual">
                  <img
                    src="assets/img/real-estate/property-exterior-1.webp"
                    className="img-fluid"
                    alt="Property Valuation"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-key"></i>
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="service-details">Property Rental</Link>
                  </h3>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                  <ul className="service-highlights">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Tenant
                      Matching
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Lease
                      Management
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Property
                      Maintenance
                    </li>
                  </ul>
                  <Link to="service-details" className="service-link">
                    <span>Start Renting</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="service-visual">
                  <img
                    src="assets/img/real-estate/property-interior-8.webp"
                    className="img-fluid"
                    alt="Property Rental"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="500">
              <div className="service-card">
                <div className="service-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="service-details">Investment Advisory</Link>
                  </h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntur magni dolores eos
                  </p>
                  <ul className="service-highlights">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Portfolio
                      Planning
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Risk
                      Assessment
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Market
                      Forecasting
                    </li>
                  </ul>
                  <Link to="service-details" className="service-link">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
                <div className="service-visual">
                  <img
                    src="assets/img/real-estate/property-exterior-4.webp"
                    className="img-fluid"
                    alt="Investment Advisory"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
            <Link to="services" className="btn-view-all">
              <span>View All Services</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section id="featured-agents" className="featured-agents section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Featured Agents</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="featured-agent">
                <div className="agent-wrapper">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-3.webp"
                      alt="Featured Agent"
                      className="img-fluid"
                    />
                    <div className="overlay-info">
                      <div className="contact-actions">
                        <Link
                          to="tel:+14155678901"
                          className="contact-btn phone"
                          title="Call Now"
                        >
                          <i className="bi bi-telephone-fill"></i>
                        </Link>
                        <Link
                          to="mailto:jennifer.adams@example.com"
                          className="contact-btn email"
                          title="Send Email"
                        >
                          <i className="bi bi-envelope-fill"></i>
                        </Link>
                      </div>
                    </div>
                    <span className="achievement-badge">Star Agent</span>
                  </div>
                  <div className="agent-details">
                    <h4>Jennifer Adams</h4>
                    <span className="position">
                      Premium Property Consultant
                    </span>
                    <div className="location-info">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>Beverly Hills</span>
                    </div>
                    <div className="expertise-tags">
                      <span className="tag">Luxury Estates</span>
                      <span className="tag">Celebrity Homes</span>
                    </div>
                    <Link to="agent-profile" className="view-profile">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="featured-agent">
                <div className="agent-wrapper">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-7.webp"
                      alt="Featured Agent"
                      className="img-fluid"
                    />
                    <div className="overlay-info">
                      <div className="contact-actions">
                        <Link
                          to="tel:+14155678902"
                          className="contact-btn phone"
                          title="Call Now"
                        >
                          <i className="bi bi-telephone-fill"></i>
                        </Link>
                        <Link
                          to="mailto:marcus.hayes@example.com"
                          className="contact-btn email"
                          title="Send Email"
                        >
                          <i className="bi bi-envelope-fill"></i>
                        </Link>
                      </div>
                    </div>
                    <span className="achievement-badge expert">Expert</span>
                  </div>
                  <div className="agent-details">
                    <h4>Marcus Hayes</h4>
                    <span className="position">
                      Commercial Real Estate Lead
                    </span>
                    <div className="location-info">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>Manhattan</span>
                    </div>
                    <div className="expertise-tags">
                      <span className="tag">Office Buildings</span>
                      <span className="tag">Retail Spaces</span>
                    </div>
                    <Link to="agent-profile" className="view-profile">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="featured-agent">
                <div className="agent-wrapper">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-5.webp"
                      alt="Featured Agent"
                      className="img-fluid"
                    />
                    <div className="overlay-info">
                      <div className="contact-actions">
                        <Link
                          to="tel:+14155678903"
                          className="contact-btn phone"
                          title="Call Now"
                        >
                          <i className="bi bi-telephone-fill"></i>
                        </Link>
                        <Link
                          to="mailto:sophia.rivera@example.com"
                          className="contact-btn email"
                          title="Send Email"
                        >
                          <i className="bi bi-envelope-fill"></i>
                        </Link>
                      </div>
                    </div>
                    <span className="achievement-badge rising">
                      Rising Star
                    </span>
                  </div>
                  <div className="agent-details">
                    <h4>Sophia Rivera</h4>
                    <span className="position">
                      First-Time Buyer Specialist
                    </span>
                    <div className="location-info">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>San Francisco</span>
                    </div>
                    <div className="expertise-tags">
                      <span className="tag">Condominiums</span>
                      <span className="tag">Young Buyers</span>
                    </div>
                    <Link to="agent-profile" className="view-profile">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="featured-agent">
                <div className="agent-wrapper">
                  <div className="agent-photo">
                    <img
                      src="assets/img/real-estate/agent-9.webp"
                      alt="Featured Agent"
                      className="img-fluid"
                    />
                    <div className="overlay-info">
                      <div className="contact-actions">
                        <Link
                          to="tel:+14155678904"
                          className="contact-btn phone"
                          title="Call Now"
                        >
                          <i className="bi bi-telephone-fill"></i>
                        </Link>
                        <Link
                          to="mailto:daniel.morrison@example.com"
                          className="contact-btn email"
                          title="Send Email"
                        >
                          <i className="bi bi-envelope-fill"></i>
                        </Link>
                      </div>
                    </div>
                    <span className="achievement-badge veteran">Veteran</span>
                  </div>
                  <div className="agent-details">
                    <h4>Daniel Morrison</h4>
                    <span className="position">
                      Investment Property Advisor
                    </span>
                    <div className="location-info">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>Austin</span>
                    </div>
                    <div className="expertise-tags">
                      <span className="tag">Multi-Family</span>
                      <span className="tag">ROI Analysis</span>
                    </div>
                    <Link to="agent-profile" className="view-profile">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center mt-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link to="agents" className="discover-all-agents">
              <span>Discover All Agents</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="testimonials section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="testimonial-grid">
            <div
              className="testimonial-item"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img
                      src="assets/img/person/person-f-5.webp"
                      alt="Testimonial 1"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h3>Sophia Martinez</h3>
                    <h4>Creative Director</h4>
                    <div className="company-logo">
                      <i className="bi bi-building"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">
                  <i className="bi bi-chat-quote-fill quote-icon"></i>
                  <p>
                    Leveraging cutting-edge design principles to create
                    immersive brand experiences that resonate with modern
                    audiences.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item featured"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img
                      src="assets/img/person/person-m-5.webp"
                      alt="Testimonial 2"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h3>Alexander Wright</h3>
                    <h4>CEO &amp; Founder</h4>
                    <div className="company-logo">
                      <i className="bi bi-buildings"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">
                  <i className="bi bi-chat-quote-fill quote-icon"></i>
                  <p>
                    Revolutionary solutions have transformed our business
                    landscape, driving unprecedented growth and market
                    leadership position.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img
                      src="assets/img/person/person-f-6.webp"
                      className="img-fluid"
                      alt="Testimonial 3"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h3>Isabella Kim</h3>
                    <h4>Product Strategist</h4>
                    <div className="company-logo">
                      <i className="bi bi-building-check"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">
                  <i className="bi bi-chat-quote-fill quote-icon"></i>
                  <p>
                    Strategic implementation of innovative technologies has
                    elevated our product development and market penetration.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="testimonial-item"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img
                      src="assets/img/person/person-m-6.webp"
                      className="img-fluid"
                      alt="Testimonial 4"
                    />
                  </div>
                  <div className="testimonial-meta">
                    <h3>James Cooper</h3>
                    <h4>Tech Lead</h4>
                    <div className="company-logo">
                      <i className="bi bi-building-gear"></i>
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">
                  <i className="bi bi-chat-quote-fill quote-icon"></i>
                  <p>
                    Exceptional technical expertise and innovative solutions
                    have streamlined our development processes significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Why Us</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Why Choose Premier Real Estate Partners?</h3>
                <p>
                  With over two decades of experience in the real estate market,
                  we've built our reputation on trust, expertise, and
                  exceptional results. Our dedicated team of local experts
                  understands the nuances of every neighborhood and market
                  trend.
                </p>

                <div className="features-list">
                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <div>
                      <h5>Local Market Expertise</h5>
                      <p>
                        Deep knowledge of neighborhoods, pricing trends, and
                        market conditions in your area.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h5>Verified Listings Only</h5>
                      <p>
                        Every property is thoroughly vetted and verified before
                        listing to ensure accuracy and quality.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-headset"></i>
                    </div>
                    <div>
                      <h5>24/7 Client Support</h5>
                      <p>
                        Our dedicated support team is available around the clock
                        to assist with your real estate needs.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-wrapper me-3">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div>
                      <h5>Proven Track Record</h5>
                      <p>
                        Consistently delivering results with over 2,500
                        successful transactions and 98% client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cta-buttons mt-4">
                  <Link to="#" className="btn btn-primary me-3">
                    Learn More About Us
                  </Link>
                  <Link to="#" className="btn btn-outline-primary">
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="stats-section">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-house-door"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={2500} />+
                      </div>
                      <div className="stat-label">Homes Sold</div>
                      <p>
                        Successfully closed transactions across all property
                        types and price ranges.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={96} />%
                      </div>
                      <div className="stat-label">Client Satisfaction</div>
                      <p>
                        Exceptional service quality rated by our satisfied
                        homeowners and investors.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-clock-history"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={20} />+
                      </div>
                      <div className="stat-label">Years Experience</div>
                      <p>
                        Two decades of expertise navigating changing market
                        conditions successfully.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="stat-card text-center">
                      <div className="stat-icon mb-3">
                        <i className="bi bi-award"></i>
                      </div>
                      <div className="stat-number">
                        <CountUpAnimation end={45} />+
                      </div>
                      <div className="stat-label">Industry Awards</div>
                      <p>
                        Recognition for excellence in real estate service and
                        client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-preview mt-5">
                  <div className="testimonial-card">
                    <div className="quote-icon mb-2">
                      <i className="bi bi-quote"></i>
                    </div>
                    <p>
                      "Working with this team made buying our first home a
                      seamless experience. Their knowledge of the local market
                      and dedication to finding the perfect property exceeded
                      our expectations."
                    </p>
                    <div className="testimonial-author d-flex align-items-center mt-3">
                      <img
                        src="assets/img/person/person-f-3.webp"
                        alt="Client"
                        className="author-image me-3"
                      />
                      <div>
                        <h6>Sarah Martinez</h6>
                        <span>First-time Homebuyer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="call-to-action-1 call-to-action section"
        id="call-to-action"
      >
        <div
          className="cta-bg"
          style={{
            backgroundImage: "url('assets/img/real-estate/showcase-3.webp')",
          }}
        ></div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="cta-content text-center">
                <h2>Need Help Finding Your Dream Property?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                <div className="cta-buttons">
                  <Link to="#" className="btn btn-primary">
                    Contact Us Today
                  </Link>
                  <Link to="#" className="btn btn-outline">
                    Schedule a Call
                  </Link>
                </div>

                <div className="cta-features">
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-telephone-fill"></i>
                    <span>Free Consultation</span>
                  </div>
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <i className="bi bi-clock-fill"></i>
                    <span>24/7 Support</span>
                  </div>
                  <div
                    className="feature-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-shield-check-fill"></i>
                    <span>Trusted Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recent-blog-posts" className="recent-blog-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Recent Blog Posts</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <article className="featured-post">
                <div className="featured-img">
                  <img
                    src="assets/img/blog/blog-post-7.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="featured-badge">Featured</div>
                </div>

                <div className="featured-content">
                  <div className="post-header">
                    <Link to="#" className="category">
                      Technology
                    </Link>
                    <span className="post-date">Dec 18, 2024</span>
                  </div>

                  <h2 className="post-title">
                    <Link to="#">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      mauris
                    </Link>
                  </h2>

                  <p className="post-excerpt">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>

                  <div className="post-footer">
                    <div className="author-info">
                      <img
                        src="assets/img/person/person-m-8.webp"
                        alt=""
                        className="author-avatar"
                      />
                      <div className="author-details">
                        <span className="author-name">Marcus Johnson</span>
                        <span className="read-time">5 min read</span>
                      </div>
                    </div>
                    <Link to="#" className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>

              <article
                className="featured-post"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="featured-img">
                  <img
                    src="assets/img/blog/blog-post-3.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="featured-badge">Featured</div>
                </div>

                <div className="featured-content">
                  <div className="post-header">
                    <Link to="#" className="category">
                      Innovation
                    </Link>
                    <span className="post-date">Dec 16, 2024</span>
                  </div>

                  <h2 className="post-title">
                    <Link to="#">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse
                    </Link>
                  </h2>

                  <p className="post-excerpt">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident.
                  </p>

                  <div className="post-footer">
                    <div className="author-info">
                      <img
                        src="assets/img/person/person-f-7.webp"
                        alt=""
                        className="author-avatar"
                      />
                      <div className="author-details">
                        <span className="author-name">Emma Rodriguez</span>
                        <span className="read-time">7 min read</span>
                      </div>
                    </div>
                    <Link to="#" className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article
                className="recent-post"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="recent-img">
                  <img
                    src="assets/img/blog/blog-post-5.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="recent-content">
                  <Link to="#" className="category">
                    Business
                  </Link>
                  <h3 className="recent-title">
                    <Link to="#">
                      Excepteur sint occaecat cupidatat non proident sunt
                    </Link>
                  </h3>
                  <div className="recent-meta">
                    <span className="author">By Jessica Kim</span>
                    <span className="date">Dec 15, 2024</span>
                  </div>
                </div>
              </article>

              <article
                className="recent-post"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="recent-img">
                  <img
                    src="assets/img/blog/blog-post-9.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="recent-content">
                  <Link to="#" className="category">
                    Marketing
                  </Link>
                  <h3 className="recent-title">
                    <Link to="#">
                      Voluptate velit esse cillum dolore eu fugiat nulla
                    </Link>
                  </h3>
                  <div className="recent-meta">
                    <span className="author">By David Park</span>
                    <span className="date">Dec 12, 2024</span>
                  </div>
                </div>
              </article>

              <article
                className="recent-post"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="recent-img">
                  <img
                    src="assets/img/blog/blog-post-6.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="recent-content">
                  <Link to="#" className="category">
                    Design
                  </Link>
                  <h3 className="recent-title">
                    <Link to="#">
                      Pariatur consectetur adipiscing elit sed do eiusmod
                    </Link>
                  </h3>
                  <div className="recent-meta">
                    <span className="author">By Sarah Miller</span>
                    <span className="date">Dec 10, 2024</span>
                  </div>
                </div>
              </article>

              <article
                className="recent-post"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <div className="recent-img">
                  <img
                    src="assets/img/blog/blog-post-8.webp"
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="recent-content">
                  <Link to="#" className="category">
                    Tech
                  </Link>
                  <h3 className="recent-title">
                    <Link to="#">
                      Magna aliquam erat volutpat consectetur adipiscing
                    </Link>
                  </h3>
                  <div className="recent-meta">
                    <span className="author">By Alex Chen</span>
                    <span className="date">Dec 8, 2024</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
