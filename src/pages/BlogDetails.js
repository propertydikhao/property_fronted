import { Link } from "react-router-dom";
import { Avatar } from "../component/Avatar";

const BlogDetails = () => {
  return (
    <main className="main">
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Blog Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Blog Details</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="blog-details" className="blog-details section">
        <div className="container" data-aos="fade-up">
          <article className="article">
            <div className="article-header">
              <h1 className="title" data-aos="fade-up" data-aos-delay="100">
                The Evolution of User Interface Design: From Skeuomorphism to
                Neumorphism
              </h1>

              <div
                className="article-meta"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="author">
                  <Avatar name="property dikhao" />
                  <div className="author-info">
                    <h4>Author By,</h4>
                    <span>Property Dihkao</span>
                  </div>
                </div>
                <div className="post-info">
                  <span>
                    <i className="bi bi-calendar4-week"></i> April 15, 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="article-featured-image" data-aos="zoom-in">
              <img
                src="assets/img/blog/blog-hero-1.webp"
                alt="UI Design Evolution"
                className="img-fluid"
              />
            </div>

            <div>{/* blog details */}</div>

            <div className="article-footer" data-aos="fade-up">
              <div className="share-article">
                <h4>Share this article</h4>
                <div className="share-buttons">
                  <Link to="#" className="share-button twitter">
                    <i className="bi bi-twitter-x"></i>
                    <span>Share on X</span>
                  </Link>
                  <Link to="#" className="share-button facebook">
                    <i className="bi bi-facebook"></i>
                    <span>Share on Facebook</span>
                  </Link>
                  <Link to="#" className="share-button linkedin">
                    <i className="bi bi-linkedin"></i>
                    <span>Share on LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
