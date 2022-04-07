import { Skeleton } from "@mui/material";
import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import Heading from "../../Components/Utils/Heading/Heading";
import "./Blog.css";
// import ContentLoader from "react-content-loader";

const Blog = () => {
  return (
    <Suspense fallback={<Skeletonn />}>
      <Blogg />
    </Suspense>
  );
};
export default Blog;

export const Blogg = () => {
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
    <div>
      <div className="blog-list">
        <Faketitle fakeTitle="Blog" />
        <Heading
          headingTitle={`Blogs`}
          headingSubTitle={`A blog is almost like an online journal and suggests a regular focus.`}
        />

        {posts.map((post) => (
          <div key={post.slug.current} className="blog-container">
            <img src={post.mainImage.asset.url} alt={post.title} />
            <Link to={`/blogs/${post.slug.current}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skeletonn = () => {
  return (
    <div>
      <Skeleton variant="rectangular" />
      <Skeleton />
      <Skeleton />
    </div>
  );
};
