import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faDotCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Footer, Navbar } from "../../Components";

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

  return (
    <div className="Home">
      {/* ************** Header ************** */}
      <Navbar />
      <div className="navbar_image_content">
        <img
          loading="lazy"
          className="background_image"
          src="/images/image1.jpg"
          alt=""
        />
        <header>
          <div className="header_content">
            <div className="headings">
              <h4>In today's life,</h4>
              <h1>Luxury Is Time And Space</h1>
              <p>
                We specialize in residential and commercial properties. With a
                thorough understanding of the market, our advisors offer
                everything you need including homes, plots of land, apartment
                and homes to office buildings, commercial spaces or business
                center.
              </p>
              <a href="javascript:void(Tawk_API.toggle())">
                <button type="button" className="btn build_button">
                  chat now
                </button>
              </a>
            </div>
          </div>
        </header>
      </div>
      {/* ************** Header end ************** */}
      {/* ************** About us ************** */}
      <section>
        <div className="container">
          <div className="row about_row row-cols-lg-2 row-cols-1 justify-content-evenly">
            <div className="col about_testimonial about_col">
              <img
                loading="lazy"
                className="about_image"
                src="images/image3.jpg"
                alt=""
              />
              <div className="testimonial">
                <FontAwesomeIcon icon={faQuoteRight} className="quote_icon" />
                <div className="cone" />
                <p>
                  We, provide you the finest possible construction and estate
                  based services for your residence and businesses.
                </p>
              </div>
            </div>
            <div className="col about_content about_col">
              <h2 className="about_us_heading">about us</h2>
              <h1 style={{ textTransform: "capitalize" }}>
                provide you the finest possible construction.
              </h1>
              <p>
                SkyView has been designed to offer an unwinding lifestyle and
                comfort living in the safest surroundings in Bahria Town
                Karachi. SkyView is a company that SkyView promises to provide
                you with the most value for budget, we are committed to making
                simple and efficient plans for our clients of all kinds. We
                concentrate on the top quality of construction and insist on
                using only the highest quality materials for our projects The
                inspiration for us is driven by our customers and their needs
                for a contemporary life style that drives us to create and
                construct infrastructures that meet needs in the future. In your
                community. There you can avail the latest facilities provided by
                BT which includes modern, high-end gold course, mosques cinemas
                and schools, supermarkets, theme parks, hospitals where your
                hopes will come true.
              </p>
              <div className="checks">
                <div style={{ flex: "0.47" }}>
                  <div className="check_mark">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>24/7 SECURITY</p>
                  </div>
                  <div className="check_mark">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>GREAT HOUSEKEEPING</p>
                  </div>
                  <div className="check_mark">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>STANDBY GENERATOR</p>
                  </div>
                </div>
                <div style={{ flex: "0.5" }}>
                  <div className="check_mark">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>FIRE SAFETY</p>
                  </div>
                  <div className="check_mark">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>STANDBY GENERATOR</p>
                  </div>
                  <div className="check_mark">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>EASY AND CONTROLLED ACCESSIBILITY TO ALL FLOOR</p>
                  </div>
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
          <h1>Our Expertise</h1>
          <p>
            We encourage a culture that is clean and hygienic. Our housekeeping
            staff is professional and diligent in meeting the requirements of
            our guests and residents at any time.
          </p>
          <div className="experience_lists">
            <ul>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Theme park facing
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Commercial showrooms with benefits
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Welcoming reception
              </li>
            </ul>
            <ul>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Huge car parking
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Wide space lounge
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Modren kitchen
              </li>
            </ul>
            <ul>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Spa like bath
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Stand by generator
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                24/7 Security and maintainance
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
          allowFullScreen
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
              <a href="#book">
                <button
                  type="button"
                  className="btn btn-primary number about_button"
                >
                  book now
                </button>
              </a>
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/exterior.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/interior.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/bedroom.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/kitchen.jpg" alt="" />
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/bathroom.jpg" alt="" />
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
              id="book"
              className="col-lg-6 col-12 testimonial_col"
              style={{
                backgroundColor: "#091e2a",
                color: "#fff",
                padding: "150px 70px",
              }}
            >
              <h1>Book a visit</h1>
              <div className="row">
                <div className="col testimonial_form_col">
                  <label htmlFor="testimonial_name">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="testimonial_name"
                  />
                </div>
                <div className="col testimonial_form_col">
                  <label htmlFor="testimonial_phone">Phone Number</label>
                  <input
                    type="text"
                    id="testimonial_phone"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col testimonial_form_col">
                  <label htmlFor="testimonial_budget">Number of persons</label>
                  <select
                    name
                    id="testimonial_budget"
                    className="testimonial_budget_select"
                  >
                    <option value={0}>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
                <div className="col testimonial_form_col">
                  <label htmlFor="testimonial_time">Time</label>
                  <select
                    name
                    id="testimonial_time"
                    className="testimonial_budget_select"
                  >
                    <option value={0}>Select time</option>
                    <option value="$1000-$3000">10:00</option>
                    <option value="$1000-$3000">10:30</option>
                    <option value="$1000-$3000">11:00</option>
                    <option value="$1000-$3000">11:30</option>
                    <option value="$1000-$3000">12:00</option>
                    <option value="$1000-$3000">12:30</option>
                    <option value="$1000-$3000">1:00</option>
                    <option value="$1000-$3000">1:30</option>
                    <option value="$1000-$3000">2:00</option>
                    <option value="$1000-$3000">2:30</option>
                    <option value="$1000-$3000">3:00</option>
                    <option value="$1000-$3000">3:30</option>
                    <option value="$1000-$3000">4:00</option>
                    <option value="$1000-$3000">4:30</option>
                    <option value="$1000-$3000">5:00</option>
                    <option value="$1000-$3000">5:30</option>
                    <option value="$1000-$3000">6:00</option>
                    <option value="$1000-$3000">6:30</option>
                    <option value="$1000-$3000">7:00</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col testimonial_form_col">
                  <label htmlFor="testimonial_date">Date</label>
                  <input
                    type="date"
                    id="testimonial_date"
                    placeholder="Your Phone"
                  />
                  <button
                    type="button"
                    className="btn btn-primary number about_button mt-4"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_background_image">
          <h1>
            Don’t Hesitate To Contact Us For Better Information And Services
          </h1>
        </div>
      </section>
      {/* ************** Testimonials end ************** */}
      {/* ************** Contact us ************** */}
      <div className="container contact_form">
        <div className="row contact_row">
          <div className="col-lg-6 col-12 contact_col contact_image">
            <h1>MANAGE YOUR PROPERTY 24/7</h1>
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
                <p>
                  Our entire team is determined to offer you personalized
                  services
                </p>
              </div>
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>
                  Our entire team is determined to offer you personalized
                  services
                </p>
              </div>
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>
                  Our entire team is determined to offer you personalized
                  services
                </p>
              </div>
            </div>
            <button type="button" className="btn btn-primary contact_button">
              03041115505
            </button>
          </div>
          <div
            className="col-lg-6 col-12 contact_col conatct_form_col"
            id="contact"
          >
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
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" placeholder="Your Phone" />
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
      {/* ************** Footer ************** */}
      <Footer />
      {/* ************** Footer end ************** */}
    </div>
  );
}

export default Home;
