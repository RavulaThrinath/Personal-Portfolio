import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import "./BlogPost.css";
import { useNavigate } from "react-router-dom";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { IconContext } from "react-icons";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Snackbar from "@mui/material/Snackbar";
import BlogSkeleton from "../../Skeleton/BlogSkeleton";

const BlogPost1 = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [open, setOpen] = React.useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  useEffect(() => {
    setTimeout(async () => {
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
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, 1000);
  }, [slug]);
  const navigate = useNavigate();
  const url = `https://www.3nath.me/blogs/${slug}`;
  const copyToClip = async () => {
    navigator.clipboard.writeText(url);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <section className="blogpost">
        {singlePost && (
          <div className="main-img">
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
              />
            )}
          </div>
        )}
        <div>{!singlePost.mainImage && <BlogSkeleton />}</div>
        <div className="block__content">
          <BlockContent
            blocks={singlePost.body}
            projectId="1sz3se83"
            dataset="production"
            className="blog_text"
          />

          <div className="share-text">
            <span>Share this:</span>
            <div className="socialshare-icons">
              <IconContext.Provider value={{ color: "#99a2ac" }}>
                <FacebookShareButton url={url}>
                  <BsFacebook size={18} />
                </FacebookShareButton>
                <WhatsappShareButton url={url}>
                  <IoLogoWhatsapp size={18} />
                </WhatsappShareButton>
                <TwitterShareButton url={url}>
                  <BsTwitter size={18} />
                </TwitterShareButton>
                <LinkedinShareButton url={url}>
                  <BsLinkedin size={16} />
                </LinkedinShareButton>
                <button onClick={copyToClip}>
                  <MdOutlineContentCopy size={16} />
                </button>
                <Snackbar
                  open={open}
                  onClose={handleClose}
                  message="Link Copied"
                  autoHideDuration={2000}
                />
              </IconContext.Provider>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="back-btn">
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
              fill="#7f78d2"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Back to blogs</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost1;
