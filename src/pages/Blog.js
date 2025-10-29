import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch, formatDate } from "../utils/utils";
import { isToastShow } from "../redux/slice/toastSlice";
import { useDispatch } from "react-redux";

const Blog = () => {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState("");
  const [totatPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [activePage]);

  const fetchBlogs = async () => {
    try {
      let payload = {
        page: activePage,
        search: "",
      };
      const projectData = await apiFetch("/api/blog", payload);
      if (projectData?.success) {
        let activeBlogs = [];
        projectData?.results?.map((el, i) => { 
          if (el?.isActive) { 
            activeBlogs.push(el)
          }
        })
        setBlogData(activeBlogs);
        setTotalPages(projectData?.totalPages);
        setTotalCount(projectData?.count);
      } else {
        dispatch(
          isToastShow({
            isShow: true,
            type: "error",
            message: projectData?.message,
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
  };

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

      <section id="blog-posts" className="blog-posts section mt-4">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {blogData?.length > 0 &&
              blogData?.map((el, i) => {
                el?.isActive && (
                  <div className="col-lg-4">
                    <article>
                      <div className="post-img">
                        <img
                          src={el?.imageInfo?.url}
                          alt={el?.imageInfo?.name}
                          className="img-fluid"
                        />
                      </div>

                      <h2 className="title">
                        <Link to={el?.blogSlug}>{el?.blogTitle}</Link>
                      </h2>

                      <div className="d-flex align-items-center">
                        <div className="post-meta">
                          <p className="post-author">Property Dikhao Team</p>
                          <p className="post-date">
                            <time dateTime="2022-01-01">
                              {formatDate(el?.insert_date)}
                            </time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
          </div>
          {blogData?.length > 0 && (
            <nav
              className="pagination-wrapper mt-5"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <div className="pagination-info">
                    <p>
                      Showing <strong>1-6</strong> of{" "}
                      <strong>{totalCount}</strong> Blogs
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="pagination justify-content-lg-end">
                    <li
                      className="page-item"
                      onClick={() => setActivePage(activePage - 1)}
                    >
                      <Link className="page-link" to="#">
                        <i className="bi bi-chevron-left"></i>
                      </Link>
                    </li>

                    {Array.from({ length: totatPages }, (_, i) => {
                      const pageNumber = i + 1; // pages start from 1
                      return (
                        <li
                          className={`page-item  ${i} ${
                            activePage === pageNumber ? "active" : ""
                          }`}
                          onClick={() => setActivePage(pageNumber)}
                        >
                          <Link className="page-link" to="#">
                            {i + 1}
                          </Link>
                        </li>
                      );
                    })}
                    <li
                      className="page-item"
                      onClick={() => setActivePage(activePage + 1)}
                    >
                      <Link className="page-link" to="#">
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
