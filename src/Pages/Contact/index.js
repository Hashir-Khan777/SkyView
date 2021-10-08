import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Footer, Navbar } from "../../Components";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      {/* ************** Header ************** */}
      <Navbar />
      <div className="contact_page_image">
        <img src="images/contactPage.jpg" alt="" />
        <div className="contact_page_content">
          <h1>Contact Us</h1>
        </div>
      </div>
      {/* ************** Header end ************** */}

      {/* ************** Contact Form ************** */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 contact_col conatct_form_col">
              <div className="row">
                <div className="col form_col">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Your Name" id="name" />
                </div>
                <div className="col form_col">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="row">
                <div className="col form_col">
                  <label htmlFor="budget">Budget</label>
                  <select name id="budget" className="budget_select">
                    <option value={0}>Range</option>
                    <option value="$1000-$3000">$1000-$3000</option>
                    <option value="$1000-$3000">$1000-$3000</option>
                    <option value="$1000-$3000">$1000-$3000</option>
                    <option value="$1000-$3000">$1000-$3000</option>
                  </select>
                </div>
                <div className="col form_col">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" placeholder="Your Phone" />
                </div>
              </div>
              <div className="row">
                <div className="col form_col">
                  <label htmlFor="details">Additional Details</label>
                  <textarea
                    name
                    id="details"
                    rows={7}
                    placeholder="Additional Details"
                    style={{
                      padding: "15px 20px",
                      fontSize: "17px",
                      outline: "none",
                    }}
                    defaultValue={""}
                  />
                  <button
                    type="button"
                    className="btn btn-primary number about_button mt-5"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <h2 className="contact_heading_1">contact us</h2>
              <h1 className="contact_heading_2">Let's Get In Touch</h1>
              <p className="contact_paragraph">
                Let’s discuss your project and find out what we can do to
                provide value.
              </p>
              <div className="footer_list">
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#00b53a", fontSize: "30px" }}
                  />
                  <div className="contact_form_details">
                    <h2>Head Office</h2>
                    <p>
                      2500 Broadway Building F, Suite F-125 Santa Monica, CA
                      90404.
                    </p>
                  </div>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#00b53a", fontSize: "30px" }}
                  />
                  <div className="contact_form_details">
                    <h2>Email Information</h2>
                    <a href="mailto:careers@invictus.com.pk">
                      careers@invictus.com.pk
                    </a>
                  </div>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ color: "#00b53a", fontSize: "30px" }}
                  />
                  <div className="contact_form_details">
                    <h2>Head Office</h2>
                    <a href="tel:+922134330105">0213433105</a>
                  </div>
                </div>
              </div>
              <div className="contact_social_links">
                <h3>Follow Us On Social Media</h3>
                <div className="row newsletter_links justify-content-start align-items-start">
                  <div className="col-lg-1">
                    <a href="#" className="newsletter_circle">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                  <div className="col-lg-1">
                    <a href="#" className="newsletter_circle">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                  <div className="col-lg-1">
                    <a href="#" className="newsletter_circle">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************** Contact Form end ************** */}

      {/* ************** Footer ************** */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.787818233126!2d67.08840061444948!3d24.871095450957664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eb27f0a568b%3A0xdd7633d5ec8dde92!2sCity%20Centre%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1632750257828!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <Footer />
      {/* ************** Footer end ************** */}
    </div>
  );
}

export default Contact;
