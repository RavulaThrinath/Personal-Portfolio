import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";

// import Preloder from "../../Components/Preloader/Preloder";
import "./Blog.css";
// import ContentLoader from "react-content-loader";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
            title,
            description,
            slug,
            body, 
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <div className="blog-list">
        <div className="HContact-heading">
          <div className="HContact-title">Blogs</div>
          <div className="HContact-subtitle">
            {`A blog is almost like an online journal and suggests a regular focus`}
          </div>
        </div>
        {posts.map((post) => (
          <div key={post.slug.current} className="blog-container">
            <img src={post.mainImage.asset.url} alt={post.title} />
            <Link to={`/blogs/${post.slug.current}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
