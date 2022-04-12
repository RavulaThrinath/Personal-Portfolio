import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
import { motion } from "framer-motion";

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
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    // exit: { opacity: 0, y: "-100vw" },
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
                <motion.div
                  className="input-box"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container}
                  transition={{ delay: 0.02, type: "tween", stiffness: 200 }}
                >
                  <span className="details">First name</span>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="first_name"
                    required
                  />
                </motion.div>
                <motion.div
                  className="input-box"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container}
                  transition={{ delay: 0.04, type: "tween", stiffness: 200 }}
                >
                  <span className="details">Last name</span>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="last_name"
                    required
                  />
                </motion.div>
                <motion.div
                  className="input-box"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container}
                  transition={{ delay: 0.06, type: "tween", stiffness: 200 }}
                >
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </motion.div>
                <motion.div
                  className="input-box"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container}
                  transition={{ delay: 0.08, type: "tween", stiffness: 200 }}
                >
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    name="number"
                    required
                  />
                </motion.div>
                <motion.div
                  className="textarea-box"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={container}
                  transition={{ delay: 0.1, type: "tween", stiffness: 200 }}
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
              </div>
              <motion.button
                initial="initial"
                animate="animate"
                exit="exit"
                variants={container}
                transition={{ delay: 0.12, type: "tween", stiffness: 200 }}
              >
                <span className="button_top" type="submit" value="send">
                  Send Message
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
