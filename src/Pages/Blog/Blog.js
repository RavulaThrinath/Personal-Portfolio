import { Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import Heading from "../../Components/Utils/Heading/Heading";
import "./Blog.css";
// import ContentLoader from "react-content-loader";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState();

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
    setLoading(true);
  }, []);
  return (
    <div className="blog">
      <Faketitle fakeTitle="Blog" />
      <Heading
        headingTitle={`Blogs`}
        headingSubTitle={`A blog is almost like an online journal \n and suggests a regular focus.`}
      />
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.slug.current} className="blog-container">
            {loading ? (
              <img src={post.mainImage.asset.url} alt={post.title} />
            ) : (
              <Skeleton variant="rectangular" />
            )}
            {loading ? (
              <Link to={`/blogs/${post.slug.current}`} className="blog-link">
                <h2>{post.title}</h2>
              </Link>
            ) : (
              <Skeleton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
