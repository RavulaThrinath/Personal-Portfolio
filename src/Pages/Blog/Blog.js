import React, { useState, useEffect, Suspense } from "react";
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
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="blog-list">
          {posts.map((post) => (
            <Link
              to={`/blogs/${post.slug.current}`}
              key={post.slug.current}
              className="blog-container"
            >
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h2>{post.title}</h2>
            </Link>
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default Blog;
