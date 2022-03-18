import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";

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
    <div>
      {posts.map((post) => (
        <article key={post.slug.current}>
          <img src={post.mainImage.asset.url} alt={post.title} width="100px" />
          <h2>{post.title}</h2>
          <Link to={`/blogs/${post.slug.current}`}>Read more</Link>
        </article>
      ))}
    </div>
  );
};

export default Blog;
