import { Link, useParams } from "react-router-dom";
import { Avatar } from "../component/Avatar";
import { useEffect, useState } from "react";
import { apiFetch, formatDate } from "../utils/utils";
import { useDispatch } from "react-redux";
import { isToastShow } from "../redux/slice/toastSlice";

const BlogDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [blogDetail, setBlogDetail] = useState('');


  useEffect(() => {
    fetchBlogDetails(slug);
  }, [slug]);

  const fetchBlogDetails = async (slug) => {
    if (slug) {
      try {
        let payload = {
          blogSlug: slug,
        };
        const blogData = await apiFetch(
          "/api/blog/getBlogBySlug",
          payload
        );
        if (blogData?.success) {
          setBlogDetail(blogData?.data?.[0]);
        } else {
          dispatch(
            isToastShow({
              isShow: true,
              type: "error",
              message: blogData?.message,
            })
          );
        }
      } catch (error) {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: "something went wrong",
          })
        );
      }
    }
  };

  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'hello',
          text: `Check out this blog: ${"title"}`,
          url: "url" || window.location.href,
        });
        console.log("Blog shared successfully!");
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // fallback
      alert("Sharing not supported in this browser. Copy link instead!");
    }
  };

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
                {blogDetail?.blogTitle}
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
                    <i className="bi bi-calendar4-week"></i>{" "}
                    {formatDate(blogDetail?.insert_date)}
                  </span>
                </div>
              </div>
            </div>

            <div className="article-featured-image" data-aos="zoom-in">
              <img
                src={blogDetail?.imageInfo?.url}
                alt={blogDetail?.imageInfo?.name}
                className="img-fluid"
              />
            </div>

            <div
              className="lead"
              dangerouslySetInnerHTML={{ __html: blogDetail?.blogDescription }}
            />

            <div className="article-footer" data-aos="fade-up">
              <div className="share-article">
                <h4>Share this article</h4>
                <div onClick={handleShare} className="share-buttons">
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
