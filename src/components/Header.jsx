import React from "react";
import Modal from "react-modal";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/uni-life-logo.png";
import shortlist from "../assets/shortlist.png";
import contactUs from "../assets/contact-us.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto", // or specify a height
    width: "auto", // or specify a width, like '50%'
    overflow: "auto", // Adds scroll to the modal if the content overflows
  },
};

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="header">
      <div className="header-title">
        <Link to="/" className="homepage-logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/Short-list">
          <img src={shortlist} alt="shortlist" />
        </Link>

        <button className="contact-btn" onClick={() => setIsOpen(true)}>
          <img src={contactUs} />
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
        >
          <div className="contact-modal-header">
            <h2>Contact Us</h2>
            <p>
              Feel free to contact us if you have any questions. Looking forward
              to hear from you.
            </p>
          </div>
          <form className="form-flex">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>

            <div>
              <label htmlFor="O">Are you are...?</label>
              <select id="occupation">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="Phone Number">Phone number</label>
              <input type="number" id="number" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
