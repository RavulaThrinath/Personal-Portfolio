import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import Heading from "../../Components/Utils/Heading/Heading";
import "./Blog.css";
import { Helmet } from "react-helmet-async";

// import ContentLoader from "react-content-loader";
// import { motion } from "framer-motion";

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
      <Helmet>
        <title>Blog - Thrinath Ravula</title>
        <meta name="description" content="I am thrinath ravula" />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Faketitle fakeTitle="Blog" />
      <div className="blog">
        <Heading
          headingTitle={`Blogs`}
          headingSubTitle={`A blog is almost like an online journal \n and suggests a regular focus.`}
        />
        <div className="blog-list">
          {posts.map((post) => (
            <div key={post.slug.current} className="blog-container">
              <Link to={`/blogs/${post.slug.current}`} className="blog-link">
                <h2>{post.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blog;
