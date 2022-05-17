import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import Heading from "../../Components/Utils/Heading/Heading";
import "./Blog.css";
import { Helmet } from "react-helmet-async";
import SkeletonArticle from "../../Skeleton/SkeletonArticle";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
              <Tilt
                key={post.slug.current}
                tiltReverse={true}
                perspective="1000"
                tiltMaxAngleX="7"
                tiltMaxAngleY="7"
                className="blog-container"
              >
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  title={post.title}
                />
                <Link
                  to={`/blogs/${post.slug.current}`}
                  className="blog-link Tilt-inner"
                >
                  <h2>{post.title}</h2>
                </Link>
              </Tilt>
            ))}
          </motion.div>
        )}
        <div className="blog-wrapper">
          {!posts && [1, 2, 3].map((n) => <SkeletonArticle key={n} />)}
        </div>
      </div>
    </>
  );
};
export default Blog;
