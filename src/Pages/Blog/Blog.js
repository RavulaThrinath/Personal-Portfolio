import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import Heading from "../../Components/Utils/Heading/Heading";
import "./Blog.css";
// import ContentLoader from "react-content-loader";
import { motion } from "framer-motion";

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
      <Faketitle fakeTitle="Blog" />
      <motion.div
        className="blog"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
      >
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
      </motion.div>
    </>
  );
};
export default Blog;
