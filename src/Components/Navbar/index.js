import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              loading="lazy"
              src="images/Sky View Logo 3.png"
              width={200}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/invictusskyview.appspot.com/o/1234.pdf?alt=media&token=c3ca16c2-1baf-4259-b1f6-0b5b436a6ab2"
                >
                  Brochure
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#book">
                  Book a visit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
