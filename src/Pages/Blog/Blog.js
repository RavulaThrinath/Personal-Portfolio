import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Bounce from "react-reveal/Bounce";

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
        <Bounce top delay={100}>
          <div className="HContact-heading">
            <div className="HContact-title">Blogs</div>
            <div className="HContact-subtitle">
              {`Let's talk about how we can bring \n your ideas to life together`}
            </div>
          </div>
        </Bounce>
        {posts.map((post) => (
          <Bounce left delay={100}>
            <Link
              to={`/blogs/${post.slug.current}`}
              key={post.slug.current}
              className="blog-container"
            >
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h2>{post.title}</h2>
            </Link>
          </Bounce>
        ))}
      </div>
    </>
  );
};

export default Blog;
