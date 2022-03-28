import React from "react";
import "./Contact.css";
import { pageVariants, pageTransition, pageStyle } from "../../Data";
import { motion } from "framer-motion";

// import { db } from "../../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import LightSpeed from "react-reveal/LightSpeed";

const Contact = () => {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [mail, setMail] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  // const [aboutproject, setAboutproject] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     const docRef = addDoc(collection(db, "Contact Form in Home Page"), {
  //       FirstName: firstname,
  //       LastEmail: lastname,
  //       Email: mail,
  //       Number: phonenumber,
  //       Message: aboutproject,
  //     });
  //     Swal.fire(
  //       "Message Sent!",
  //       "Our Team will contact you as soon as possible",
  //       "success"
  //     );
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   setFirstname("");
  //   setLastname("");
  //   setMail("");
  //   setPhonenumber("");
  //   setAboutproject("");
  // };
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="fake-title-parent">
        <h1 className="fake-title">Contact</h1>
      </div>
      <div className="container">
        <div className="HContact-heading">
          <div className="HContact-title">Contact Me</div>
          <div className="HContact-subtitle">
            {`Let's talk about how we can bring \n your ideas to life together`}
          </div>
        </div>
        <div className="content">
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First name</span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                  // value={firstname}
                  // onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Last name</span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                  // value={lastname}
                  // onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  // value={mail}
                  // onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your phone numbers"
                  required
                  // value={phonenumber}
                  // onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
              <div className="textarea-box">
                <span className="details">Short brief</span>
                <textarea
                  type="text"
                  placeholder="Tell me about your project"
                  rows="4"
                  cols="50"
                  required
                  // value={aboutproject}
                  // onChange={(e) => setAboutproject(e.target.value)}
                />
              </div>
            </div>
            <button>
              <span className="button_top"> Send Message </span>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
