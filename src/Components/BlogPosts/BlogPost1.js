import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import "./BlogPost.css";
import Preloader from "../Preloader/Preloader";

const BlogPost1 = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);
  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="blogpost">
          <div className="main-img">
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
              />
            )}
          </div>
          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="1sz3se83"
              dataset="production"
              className="blog_text"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost1;
