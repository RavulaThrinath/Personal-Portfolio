import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import { motion } from "framer-motion";
import { formDetails } from "../../Data";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if4bs33",
        "template_qgliu1o",
        form.current,
        "lGOS_RSp7CIG6dsHJ"
      )
      .then(
        (result) => {
          alert(
            "Thanks for your message, I will get back to you as soon as possible"
          );
          e.target.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  const container = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  const container1 = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Helmet>
        <title>Contact - Thrinath Ravula</title>
        <meta
          name="description"
          content="Thrinath Ravula is a front-end developer who spends time building useful products. He Specialize in refined web experiences with a focus on animated, responsive, & interactive content. He is a designer, developer and content creator."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Faketitle fakeTitle="Contact" />
      <motion.section>
        <div className="container">
          <Heading
            headingTitle={`Contact Me`}
            headingSubTitle={`Let's talk about how we can bring \n your ideas to life together`}
          />
          <div className="content">
            <form ref={form} onSubmit={sendEmail}>
              <div className="user-details">
                {formDetails.map((details) => (
                  <motion.div
                    key={details.id}
                    className="input-box"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={container}
                    transition={{
                      delay: `${details.time}`,
                    }}
                  >
                    <span className="details">{details.label}</span>
                    <input
                      type={details.text}
                      placeholder={details.placeholder}
                      name={details.name}
                      required
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="textarea-box"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container}
                  transition={{ delay: 0.5 }}
                >
                  <span className="details">Short brief</span>
                  <textarea
                    type="text"
                    placeholder="Tell me about your project"
                    name="message"
                    rows="4"
                    cols="50"
                    required
                  />
                </motion.div>
                <motion.button
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container1}
                  transition={{ delay: 0.8, easeOut: [0, 0.25, 0.5, 1] }}
                >
                  <span className="button_top" type="submit" value="send">
                    Send Message
                  </span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
