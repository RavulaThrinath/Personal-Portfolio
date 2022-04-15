import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
import { motion } from "framer-motion";
import { formDetails } from "../../Data";

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
          // console.log(result.text);
          alert(result.text);
        },
        (error) => {
          // console.log(error.text);
          alert(error.text);
        }
      );
  };
  const container = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <>
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
                      type: "spring",
                      stiffness: 100,
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
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
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
                  variants={container}
                  transition={{
                    delay: 0.55,
                    type: "spring",
                    stiffness: 100,
                  }}
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
