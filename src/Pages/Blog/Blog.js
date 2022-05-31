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
        <meta
          name="description"
          content="Thrinath Ravula is a front-end developer who spends time building useful products. He Specialize in refined web experiences with a focus on animated, responsive, & interactive content. He is a designer, developer and content creator."
        />
        <link rel="canonical" href="/blogs" />
      </Helmet>
      <Faketitle fakeTitle="Blog" />
      <div className="blog">
        <Heading
          headingTitle={`Blogs`}
          headingSubTitle={`A blog is almost like an online journal \n and suggests a regular focus.`}
        />
        {posts && (
          <motion.div className="blog-list">
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
