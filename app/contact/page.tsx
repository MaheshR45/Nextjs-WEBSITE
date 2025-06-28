"use client";

import { useState } from "react";
import BreadCrumbSection from "../components/BreadCrumb";
import { basePath } from "@/base-config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    term: false,
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Optional: call an API or show success message
  };

  return (
    <>
      {/* BredCrumb-Section */}
      <BreadCrumbSection
        link="/contact"
        menu="Contact us"
        caption={
          "If you have an query, please get in touch with us, we will revert back quickly."
        }
      />

      {/* Contact Us Section Start */}
      <section className="contact_page_section pb-5">
        <div className="container">
          <div className="contact_inner">
            <div className="contact_form">
              <div className="section_title">
                <h2>
                  Leave a <span>message</span>
                </h2>
                <p>Fill up form below, our team will get back soon</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="form-group">
                                    <input name="companyName" type="text" placeholder="Company Name" className="form-control" />
                                </div> */}
                {/* <div className="form-group">
                                    <select name="country" className="form-control">
                                        <option value="">Country</option>
                                    </select>
                                </div> */}
                <div className="form-group">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group term_check">
                  <input
                    name="term"
                    type="checkbox"
                    id="term"
                    checked={formData.term}
                    onChange={handleChange}
                  />
                  <label htmlFor="term">
                    I agree to receive emails, newsletters and promotional
                    messages
                  </label>
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn puprple_btn">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
            <div className="contact_info">
              <div className="icon">
                <img
                  src={`${basePath}/libs/images/contact_message_icon.png`}
                  alt="image"
                />
              </div>
              <div className="section_title">
                <h2>
                  Ready to Build the <span>Next-Gen Experience?</span>
                </h2>
                <p className="sub-title">
                  <span>Book a Live Demo</span> and see how SmyData turns bold
                  ideas into business results - usually in less than 30 days.
                </p>
                <p>
                  <em>
                    Prefer to talk first? Call us at +1 214-(884)-5649 or open
                    the chat bubble anytime.
                  </em>
                </p>
              </div>
              {/* <a href="#" className="btn puprple_btn">
                READ FAQ
              </a> */}
              <ul className="contact_info_list">
                <li>
                  <div className="img">
                    <img
                      src={`${basePath}/libs/images/mail_icon.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <span>Email Us</span>
                    <a href="mailto:info@smydata.com">info@smydata.com</a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img
                      src={`${basePath}/libs/images/call_icon.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <span>Call Us</span>
                    <a href="tel:+1(214)884-5649">+1 214-(884)-5649</a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img
                      src={`${basePath}/libs/images/location_icon.png`}
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <span>Visit Us</span>
                    <p>
                      17350 State Hwy 249, Ste 220 <br />
                      #10108 Houston, Texas 77064
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section End */}

      {/* Map Section Start */}
      {/* <section className="row_am map_section">
        <div className="container">
          <div className="map_inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.2006751735803!2d-95.54422552499298!3d29.957170822701503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cde743f206f5%3A0x4b612eeae1405e14!2s17350%20TX-249%20%23220%2C%20Houston%2C%20TX%2077064%2C%20USA!5e1!3m2!1sen!2sin!4v1750095687314!5m2!1sen!2sin"
              width="100%"
              height="510"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}
      {/* Map Section End */}
    </>
  );
}
