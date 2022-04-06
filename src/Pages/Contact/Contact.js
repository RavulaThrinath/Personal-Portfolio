import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    <Faketitle fakeTitle="Contact" />
      <div className="container">
        <Heading
          headingTitle={`Contact Me`}
          headingSubTitle={`Let's talk about how we can bring your ideas to life together`}
        />
        <div className="content">
          <form ref={form} onSubmit={sendEmail}>
            <div className="user-details">
              <div
                className="input-box"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="100"
                data-aos-duration="100"
              >
                <span className="details">First name</span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="first_name"
                  required
                />
              </div>
              <div
                className="input-box"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="150"
                data-aos-duration="150"
              >
                <span className="details">Last name</span>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="last_name"
                  required
                />
              </div>
              <div
                className="input-box"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="200"
                data-aos-duration="200"
              >
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>
              <div
                className="input-box"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="250"
                data-aos-duration="250"
              >
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  name="number"
                  required
                />
              </div>
              <div
                className="textarea-box"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="300"
                data-aos-duration="300"
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
              </div>
            </div>
            <button>
              <span className="button_top" type="submit" value="send">
                {" "}
                Send Message{" "}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
