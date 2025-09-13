import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Blog</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="blog-hero" className="blog-hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div className="col-lg-8">
              <article
                className="featured-post position-relative mb-4"
                data-aos="fade-up"
              >
                <img
                  src="assets/img/blog/blog-hero-9.webp"
                  alt="Featured post"
                  className="img-fluid"
                />
                <div className="post-overlay">
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="category">Politics</span>
                      <span className="date">02/15/2024</span>
                    </div>
                    <h2 className="post-title">
                      <Link to="#">
                        Optimizing Strategic Initiatives Through
                        Cross-Functional Collaboration
                      </Link>
                    </h2>
                    <p className="post-excerpt">
                      Leveraging core competencies to drive sustainable growth
                      and maximize stakeholder value through innovative
                      solutions and market-driven approaches.
                    </p>
                    <div className="post-author">
                      <span>by</span>
                      <Link to="#">Jennifer Mitchell</Link>
                    </div>
                  </div>
                </div>
              </article>

              <div className="row g-4">
                <div className="col-md-6">
                  <article className="secondary-post" data-aos="fade-up">
                    <div className="post-image">
                      <img
                        src="assets/img/blog/blog-post-1.webp"
                        alt="Post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="category">Politics</span>
                        <span className="date">03/21/2024</span>
                      </div>
                      <h3 className="post-title">
                        <Link to="#">
                          Implementing Agile Methodologies for Enhanced Business
                          Performance
                        </Link>
                      </h3>
                      <div className="post-author">
                        <span>by</span>
                        <Link to="#">Robert Anderson</Link>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article
                    className="secondary-post"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="post-image">
                      <img
                        src="assets/img/blog/blog-post-2.webp"
                        alt="Post"
                        className="img-fluid"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="category">Business</span>
                        <span className="date">01/30/2024</span>
                      </div>
                      <h3 className="post-title">
                        <Link to="#">
                          Streamlining Operations Through Digital Transformation
                          Solutions
                        </Link>
                      </h3>
                      <div className="post-author">
                        <span>by</span>
                        <Link to="#">Sarah Thompson</Link>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news-tabs" data-aos="fade-up" data-aos-delay="200">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#top-stories"
                      type="button"
                    >
                      Top stories
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#trending"
                      type="button"
                    >
                      Trending News
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#latest"
                      type="button"
                    >
                      Latest News
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="top-stories">
                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-1.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Science</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Maximizing ROI Through Strategic Resource
                                Allocation
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Michael Davidson</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-2.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Travel</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Leveraging Big Data Analytics for Market
                                Intelligence
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Emily Richardson</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-3.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Politics</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Enhancing Customer Experience Through Digital
                                Innovation
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Daniel Cooper</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-4.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Technology</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Transforming Business Models Through Digital
                                Innovation
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Rachel Stevens</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-5.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Finance</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Strategic Investment Planning for Sustainable
                                Growth
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Andrew Phillips</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="tab-pane fade" id="trending">
                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-4.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Science</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Implementing Sustainable Business Practices for
                                Long-term Growth
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Alexandra Foster</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-5.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Style</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Optimizing Supply Chain Management Through
                                Technology Integration
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Christopher Wells</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-6.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Politics</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Developing Strategic Partnerships for Market
                                Expansion
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Victoria Palmer</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-7.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Marketing</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Enhancing Brand Value Through Customer-Centric
                                Strategies
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Sophia Rodriguez</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-8.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Leadership</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Building High-Performance Teams in Dynamic
                                Environments
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Nathan Brooks</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="tab-pane fade" id="latest">
                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-7.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Health</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Accelerating Innovation Through Cross-functional
                                Collaboration
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Benjamin Carter</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-8.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Business</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Driving Business Growth Through Strategic
                                Digital Initiatives
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Olivia Martinez</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-9.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Sports</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Maximizing Operational Efficiency Through
                                Process Optimization
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">William Turner</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-10.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Innovation</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Leveraging AI Solutions for Business Process
                                Automation
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Isabella Clark</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="tab-post">
                      <div className="row g-0 align-items-center">
                        <div className="col-4">
                          <img
                            src="assets/img/blog/blog-post-square-6.webp"
                            alt="Post"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-8">
                          <div className="post-content">
                            <span className="category">Strategy</span>
                            <h4 className="post-title">
                              <Link to="#">
                                Implementing Agile Framework for Project
                                Management Excellence
                              </Link>
                            </h4>
                            <div className="post-author">
                              by <Link to="#">Marcus Henderson</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog-posts" className="blog-posts section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-1.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Politics</p>

                <h2 className="title">
                  <Link to="blog-details">
                    Dolorum optio tempore voluptas dignissimos
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-f-12.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Maria Doe</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-2.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Sports</p>

                <h2 className="title">
                  <Link to="blog-details">
                    Nisi magni odit consequatur autem nulla dolorem
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-f-13.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Allisa Mayer</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 5, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-3.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Entertainment</p>

                <h2 className="title">
                  <Link to="blog-details">
                    Possimus soluta ut id suscipit ea ut in quo quia et soluta
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-m-10.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Mark Dower</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 22, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-4.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Sports</p>

                <h2 className="title">
                  <Link to="blog-details">
                    Non rem rerum nam cum quo minus olor distincti
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-f-14.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Lisa Neymar</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 30, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-5.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Politics</p>

                <h2 className="title">
                  <Link to="blog-details">
                    Accusamus quaerat aliquam qui debitis facilis consequatur
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-m-11.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Denis Peterson</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 30, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-6.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Entertainment</p>

                <h2 className="title">
                  <Link to="blog-details">
                    Distinctio provident quibusdam numquam aperiam aut
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-f-15.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Mika Lendon</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Feb 14, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="pagination-2" className="pagination-2 section">
        <div className="container">
          <nav
            className="d-flex justify-content-center"
            aria-label="Page navigation"
          >
            <ul>
              <li>
                <Link to="#" aria-label="Previous page">
                  <i className="bi bi-arrow-left"></i>
                  <span className="d-none d-sm-inline">Previous</span>
                </Link>
              </li>

              <li>
                <Link to="#" className="active">
                  1
                </Link>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li className="ellipsis">...</li>
              <li>
                <Link to="#">8</Link>
              </li>
              <li>
                <Link to="#">9</Link>
              </li>
              <li>
                <Link to="#">10</Link>
              </li>

              <li>
                <Link to="#" aria-label="Next page">
                  <span className="d-none d-sm-inline">Next</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Blog;
