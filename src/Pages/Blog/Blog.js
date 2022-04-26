import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import Heading from "../../Components/Utils/Heading/Heading";
import "./Blog.css";
import { Helmet } from "react-helmet-async";
import SkeletonArticle from "../../Skeleton/SkeletonArticle";
// import ContentLoader from "react-content-loader";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState(null);
  const container = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    setTimeout(async () => {
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
    }, 500);
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog - Thrinath Ravula</title>
        <meta name="description" content="I am thrinath ravula" />
        <link rel="canonical" href="/blogs" />
      </Helmet>
      <Faketitle fakeTitle="Blog" />
      <div className="blog">
        <Heading
          headingTitle={`Blogs`}
          headingSubTitle={`A blog is almost like an online journal \n and suggests a regular focus.`}
        />
        {posts && (
          <motion.div
            className="blog-list"
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              delay: 0,
              easeOut: [0, 0.25, 0.5, 1],
            }}
          >
            {posts.map((post) => (
              <div key={post.slug.current} className="blog-container">
                <Link to={`/blogs/${post.slug.current}`} className="blog-link">
                  <h2>{post.title}</h2>
                </Link>
              </div>
            ))}
          </motion.div>
        )}
        <div className="blog-wrapper">
          {!posts && [1, 2, 3, 4, 5, 6].map((n) => <SkeletonArticle key={n} />)}
        </div>
      </div>
    </>
  );
};
export default Blog;
