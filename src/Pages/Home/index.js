import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faArrowRight,
  faDotCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Footer, Navbar } from "../../Components";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

function Home() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6143267fd326717cb681c6aa/1ffn4son8";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  });

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.querySelector(".three_divs_container").getBoundingClientRect()
          .top -
          window.innerHeight <
        -100
      ) {
        document
          .querySelector(".three_divs_container")
          .classList.add("visible");
      }
    };
  });

  return (
    <div className="Home">
      {/* ************** Header ************** */}
      <Navbar />
      <div className="navbar_image_content">
        <img className="background_image" src="/images/image1.jpg" alt="" />
        <header>
          <div className="header_content">
            <div className="headings">
              <h4>Looking to Develop Your</h4>
              <h1>Dream Mobile Application?</h1>
              <p>
                Build world-class digital products with a team of design,
                development, and strategy experts. All in one place.
              </p>
              <button type="button" className="btn build_button">
                let's build
              </button>
            </div>
          </div>
        </header>
      </div>
      {/* ************** Header end ************** */}
      {/* ************** Three divs ************** */}
      <div className="container three_divs_container">
        <div className="row justify-content-center three_rows">
          <div className="col-lg-4 col-md-6 col-12 mb-3 services">
            <img
              src="images/speciality1.jpeg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-3 services">
            <img
              src="images/speciality2.jpeg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12 services">
            <img
              src="images/speciality3.jpeg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      {/* ************** Three divs end ************** */}
      {/* ************** About us ************** */}
      <section>
        <div className="container">
          <div className="row about_row row-cols-lg-2 row-cols-1 justify-content-evenly">
            <div className="col about_testimonial about_col">
              <img className="about_image" src="images/image3.jpg" alt="" />
              <div className="testimonial">
                <FontAwesomeIcon icon={faQuoteRight} className="quote_icon" />
                <div className="cone" />
                <p>
                  We eat, sleep, and breathe mobile. It’s who we are. We create
                  the kind of apps that people love &amp; are used over &amp;
                  over again.
                </p>
              </div>
            </div>
            <div className="col about_content about_col">
              <h2 className="about_us_heading">about us</h2>
              <h1>Turn ideas into revolutionary products &amp; services</h1>
              <p>
                We build affordable technology solutions for businesses, large
                &amp; small. By applying modern design principles along with the
                latest in mobile &amp; web technologies, we create tailored
                solutions that add value by connecting people with each other,
                businesses with their customers, and decision makers with
                valuable information, while simplifying business processes,
                accelerating production, and lowering costs.
              </p>
              <button
                type="button"
                className="btn btn-primary number about_button"
              >
                get started
              </button>
              <div className="checks">
                <div className="check_mark">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>We are committed to providing quality IT Services</p>
                </div>
                <div className="check_mark">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>We are committed to providing quality IT Services</p>
                </div>
                <div className="check_mark">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>We are committed to providing quality IT Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************** About us end ************** */}
      {/* ************** Experience ************** */}
      <section>
        <div className="container experience">
          <h3>our experience</h3>
          <h1>Our Expertise in Multiple Industries</h1>
          <p>
            Our mobile application development experience varies across a
            variety of niches and business markets.
          </p>
          <div className="experience_lists">
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Business
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Entertainment
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Communication
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Social
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Finance
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Shopping
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Music &amp; Audio
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Auto &amp; Vehicle
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Health &amp; Fitness
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ************** Experience end ************** */}
      {/* ************** TVC ************** */}
      <div className="container tvc">
        <h1>Sky View TVC</h1>
        <iframe
          width="100%"
          height="415"
          className="mt-3"
          src="https://www.youtube.com/embed/6Q0D4gyPKT4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen={true}
        ></iframe>
      </div>
      {/* ************** TVc end ************** */}
      {/* ************** Services ************** */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 service_col">
              <h3 className="service_heading">Book Your Visit Today!</h3>
              <p className="service_para">
                Our team of expert and verified resisted agents will be waiting
                for your arrival. the team will provide you comprehensive
                details of our project Sky View, while taking you on a exiting
                journey of Bharia town Karachi and to our site location. You can
                see the amazing adventure park in front of your project on main
                jinna avenue, the only residential project of jinna venue
              </p>
              <button
                type="button"
                className="btn btn-primary number about_button"
              >
                book now
              </button>
            </div>
            <div className="col-lg-4 service_col">
              <img src="images/exterior.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img src="images/interior.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img src="images/bedroom.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img src="images/kitchen.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img src="images/bathroom.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ************** Services end ************** */}
      {/* ************** Testimonials ************** */}
      <section className="testimonial_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 testimonial_image testimonial_col"></div>
            <div
              className="col-lg-6 col-12 testimonial_center"
              style={{ backgroundColor: "#091e2a", color: "#fff" }}
            >
              <h1>What Clients Say About Us</h1>
              <div className="circle">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ fontSize: "45px", color: "#00b53a" }}
                />
              </div>
              <p className="client_testimonial">
                Appshah was hired to build a speech pathology social app. The
                iOS- and Android-compatible platform connects parents with
                pathologists, and features a forum, instant messaging, and
                profile creation abilities. They delivered everything I asked
                for.
              </p>
              <img src="images/if-min.jpg" alt="" className="ceo" />
              <p>
                <span className="name_heading">Jonathan Viverette</span>
                <br />
                CEO, iFollow Inc.
              </p>
            </div>
          </div>
        </div>
        <div className="contact_background_image">
          <h1>
            Don’t Hesitate To Contact Us For Better Information And Services
          </h1>
          <p>
            To ensure the privacy and confidentiality of your project, we sign
            an NDA (Non-Disclosure Agreement) before any business proceeding.
          </p>
        </div>
      </section>
      {/* ************** Testimonials end ************** */}
      {/* ************** Contact us ************** */}
      <div className="container contact_form">
        <div className="row contact_row">
          <div className="col-lg-6 col-12 contact_col contact_image">
            <h1>Perfect Solutions For Your Business</h1>
            <p className="contact_para">
              Fill in the form and tell us about your project. Our team will
              contact you promptly to discuss next steps.
            </p>
            <div className="contact_checks">
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>We are committed to providing quality IT Services</p>
              </div>
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>We are committed to providing quality IT Services</p>
              </div>
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>We are committed to providing quality IT Services</p>
              </div>
            </div>
            <button type="button" className="btn btn-primary contact_button">
              03000000000
            </button>
          </div>
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
                  id="details"
                  rows={7}
                  placeholder="Additional Details"
                  style={{
                    padding: "15px 20px",
                    fontSize: "17px",
                    outline: "none",
                    width: "100%",
                  }}
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
        </div>
      </div>
      {/* ************** Contact us end ************** */}
      {/* ************** Trusted companies ************** */}
      <section className="companies">
        <div className="trusted_companies">
          <h1>Trusted By The World’s Best Organizations</h1>
          <div className="container">
            <div className="row">
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************** Trusted companies END ************** */}
      {/* ************** Footer ************** */}
      <Footer />
      {/* ************** Footer end ************** */}
    </div>
  );
}

export default Home;