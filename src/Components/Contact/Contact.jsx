import React from "react";
import "./Contact.css";
import icon1 from "../../assets/mail-icon.png";
import icon2 from "../../assets/phone-icon.png";
import icon3 from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cab7c8c-62e1-402d-8902-c1506ee05836");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Message</h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, question, and suggestions are
          important to us.
        </p>
        <ul>
          <li>
            <img src={icon1} /> hazycreator@gmail.com
          </li>
          <li>
            <img src={icon2} /> +91 83683 07950
          </li>
          <li>
            <img src={icon3} />
            New Delhi
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tell"
            name="Phone"
            placeholder="Enter Your Phone Number"
            required
          />
          <label>Enter Your Message Here</label>
          <textarea
            name="Message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn2">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
