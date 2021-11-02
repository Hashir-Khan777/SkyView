import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="footer_section">
      <div className="footer">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-4">
              <img
                loading="lazy"
                src="images/footerLogo.png"
                className="footerLogo"
                width={250}
                alt=""
              />
              <p className="footer_para">
                Each of our properties has its distinct design style and offers
                a lifestyle that is aspirational in a vibrant community that is
                supported by the A5 Builders & Developers.
              </p>
              <div className="footer_list">
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    Plot # B 74-75, Precinct-03, Westren Service Road, Jinnah
                    Avenue Commercial 2, Bahria Town, Karachi, Pakistan
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="mailto:sales@appshah.com">sales@a5bd.com</a>
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="tel:+923041115505">03041115505</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <h1>other pages</h1>
              <div className="footer_list">
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="#">Home</a>
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="#">Process</a>
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="#">About</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h1>quick links</h1>
              <div className="footer_list">
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="#">Terms and conditions</a>
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="#">Contact</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h1>newsletter</h1>
              <p style={{ color: "#A1A1A1", fontSize: "large" }}>
                Get the latest news &amp; updates
              </p>
              <div className="container">
                <div className="row newsletter_links">
                  <div
                    className="col-lg-2 social_link"
                    style={{ marginRight: 10 }}
                  >
                    <a
                      href="https://www.facebook.com/SVtower"
                      target="_blank"
                      className="newsletter_circle"
                      style={{
                        backgroundColor: "#4b69b1",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                  <div className="col-lg-2 social_link">
                    <a
                      href="https://www.instagram.com/skyviewtower/"
                      target="_blank"
                      className="newsletter_circle"
                      style={{ backgroundColor: "#8f33a3" }}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy_right">
          <p style={{ color: "#ffffff" }}>
            A project of{" "}
            <a
              href="http://www.a5bd.com"
              target="_blank"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              A5 builders and developers
            </a>
          </p>
          <p>Copyright © 2021 Sky View All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
