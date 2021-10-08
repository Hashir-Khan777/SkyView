import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
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
                src="images/footerLogo.png"
                className="footerLogo"
                width={250}
                alt=""
              />
              <p className="footer_para">
                Build world-class digital products with a team of design,
                development, and strategy experts. All in one place.
              </p>
              <div className="footer_list">
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    2500 Broadway Building F, Suite F-125 Santa Monica, CA
                    90404.
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="mailto:sales@appshah.com">sales@appshah.com</a>
                  </p>
                </div>
                <div className="footer_check_mark">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ color: "#ffffff", fontSize: "20px" }}
                  />
                  <p>
                    <a href="tel:+923000000000">03000000000</a>
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
                <div className="row newsletter_links justify-content-start align-items-start">
                  <div className="col-lg-2">
                    <a
                      href="#"
                      className="newsletter_circle"
                      style={{ backgroundColor: "#4b69b1" }}
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="#"
                      className="newsletter_circle"
                      style={{ backgroundColor: "#27aaf4" }}
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </div>
                  <div className="col-lg-2">
                    <a
                      href="#"
                      className="newsletter_circle"
                      style={{ backgroundColor: "#0a66c2" }}
                    >
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
        <div className="copy_right">
          <p style={{ color: "#00b53a" }}>DREAM.DESIRE.DEVELOP</p>
          <p>Copyright © 2021 Appshah All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;