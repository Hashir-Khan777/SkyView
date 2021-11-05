import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { Footer, Navbar } from "../../Components";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Home() {
  const [bookVisit, setBookVisit] = useState({
    name: "",
    number: "",
    persons: "",
    time: "",
    date: "",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    detail: "",
  });

  const bookavisit = async () => {
    await addDoc(collection(getFirestore(), "bookVisit"), bookVisit);
  };
  const send = async () => {
    await addDoc(collection(getFirestore(), "contactForm"), form);
  };

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
        document.querySelector(".testimonial") &&
        document.querySelector(".testimonial").getBoundingClientRect().top -
          window.innerHeight <
          -100
      ) {
        document.querySelector(".testimonial").classList.add("visible");
      }

      if (
        document.querySelector(".contact_form") &&
        document.querySelector(".contact_form").getBoundingClientRect().top -
          window.innerHeight <
          -100
      ) {
        document.querySelector(".contact_form").classList.add("visible");
      }
    };
  }, []);

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
              <h1>
                Luxury and a healthy way of living is the motto of modern life.
              </h1>
              <p>
                A5B&D, proudly announces its first eco-friendly project, SkyView
                Tower in Bahria Town, one of the benchmarks of Karachi city. It
                is a project that symbolizes the excellence of living in this
                era, by giving you a peaceful and comfortable environment for
                your dwelling in the city of lights.
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
              <h1 style={{ textTransform: "capitalize" }}>
                Owning a good place is a blessing in disguise
              </h1>
              <p>
                It is vital for your future growth that you find the finest
                place to lay the foundation for your family, especially in
                Karachi. Hence, owning a suitable place for your family and kids
                is the best decision you can make for your family. SkyView is a
                residential complex in Bahria Town, Karachi, that has been
                created to provide a relaxing lifestyle and comfort in the
                safest surroundings. A5B&D is a construction company that
                through SkyView claims to provide you the most value for your
                money; we are dedicated to creating simple and efficient plans
                for all of our clients. We place a high concentration on
                top-grade construction quality and insist on using only the best
                materials in our projects. Our motivation comes from our
                clients' needs for a modern lifestyle, which motivates us to
                design and build infrastructures that will suit those needs in
                the future. Plus, through this project, you will avail of the
                latest facilities present in Bahria Town, which include a
                modern, high-end golf course, mosques, cinemas, and schools,
                supermarkets, theme parks, and hospitals. In the end, what
                matters is your will and decision in the completion of your
                dream. So book your visit now!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ************** About us end ************** */}
      {/* ************** Mandatory services ************** */}
      <section>
        <div className="container mandatory">
          <h1>Mandatory Services</h1>
          <div className="mandatory_lists">
            <ul className="col-sm-6">
              <li style={{ textTransform: "capitalize" }}>
                <h4 style={{ fontWeight: "bold" }}>24/7 SECURITY</h4>
                <p style={{ width: 500, fontSize: 14 }}>
                  We provide 24 hours round clock secure environment to our
                  clients. Remember, your safety is our topmost priority.
                </p>
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <h4 style={{ fontWeight: "bold" }}>GREAT HOUSEKEEPING</h4>
                <p style={{ width: 500, fontSize: 14 }}>
                  We offer a professional and skilled staff and workforce that
                  will not only ensure your safety, but also assure your
                  prosperity.
                </p>
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <h4 style={{ fontWeight: "bold" }}>STANDBY GENERATOR</h4>
                <p style={{ width: 500, fontSize: 14 }}>
                  A5B&D is also offering the option of a standby generator in
                  case of emergency blackouts.
                </p>
              </li>
            </ul>
            <ul className="col-sm-6">
              <li style={{ textTransform: "capitalize" }}>
                <h4 style={{ fontWeight: "bold" }}>FIRE SAFETY</h4>
                <p style={{ width: 500, fontSize: 14 }}>
                  Being aware of the unpredictable situation and urgency, we are
                  also equipping the project with fire safety measures and
                  passages.
                </p>
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <h4 style={{ fontWeight: "bold" }}>
                  EASY AND CONTROLLED ACCESSIBILITY TO ALL FLOOR
                </h4>
                <p style={{ width: 500, fontSize: 14 }}>
                  A5B&D is ensuring the installation of fast and full working
                  heavy-duty lifts to guarantee quick access to all floors.
                </p>
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <h4 style={{ fontWeight: "bold" }}>RECYCLING PLAN</h4>
                <p style={{ width: 500, fontSize: 14 }}>
                  We have made decisive plan in recycling the waste water by
                  utilizing them for greenery or eco-friendly purposes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ************** Mandatory services end ************** */}
      {/* ************** Experience ************** */}
      <section>
        <div className="container experience">
          <h1>Additional Conveniences</h1>
          <div className="experience_lists">
            <ul>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Theme Park Facing
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Commercial Showrooms With Benefits
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Welcoming Reception
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
                Modern style kitchen
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
                Situated on Jinnah Avenue
              </li>
              <li style={{ textTransform: "capitalize" }}>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#40515e", margin: "0 10px" }}
                />
                Timely maintenance
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
                Our team of expert and genuine agents will be waiting for your
                arrival. The team will elaborate you with the comprehensive
                details of our project Sky View while taking you on an exciting
                journey to our site location in Bahria Town, Karachi. You will
                witness the perception of the project which will be constructed
                in front of the famous adventure theme park on main Jinnah
                Avenue, Bahria Town.
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
              <div className="service_image_overlay">
                <a href="#book">
                  <button className="btn btn-primary number">book now</button>
                </a>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="btn btn-primary number">chat now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/interior.jpg" alt="" />
              <div className="service_image_overlay">
                <a href="#book">
                  <button className="btn btn-primary number">book now</button>
                </a>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="btn btn-primary number">chat now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/bedroom.jpg" alt="" />
              <div className="service_image_overlay">
                <a href="#book">
                  <button className="btn btn-primary number">book now</button>
                </a>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="btn btn-primary number">chat now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/kitchen.jpg" alt="" />
              <div className="service_image_overlay">
                <a href="#book">
                  <button className="btn btn-primary number">book now</button>
                </a>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="btn btn-primary number">chat now</button>
                </a>
              </div>
            </div>
            <div className="col-lg-4 service_col">
              <img loading="lazy" src="images/bathroom.jpg" alt="" />
              <div className="service_image_overlay">
                <a href="#book">
                  <button className="btn btn-primary number">book now</button>
                </a>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="btn btn-primary number">chat now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************** Services end ************** */}
      {/* ************** Testimonials ************** */}
      <section className="testimonial_section">
        <div className="container-fluid">
          <div className="row">
            <div className="testimonial_image col-lg-6">
              <img src="/images/image4.jpeg" alt="" />
              <div className="image_overlay"></div>
            </div>
            <div
              id="book"
              className="col-lg-6"
              style={{
                backgroundColor: "#091e2a",
                color: "#fff",
                padding: "150px 70px",
              }}
            >
              <h1>Book a Visit Today</h1>
              <div className="row">
                <div className="col book_form_col">
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="testimonial_name"
                    value={bookVisit.name}
                    onChange={(e) =>
                      setBookVisit({ ...bookVisit, name: e.target.value })
                    }
                  />
                </div>
                <div className="col book_form_col">
                  <input
                    type="text"
                    id="testimonial_phone"
                    placeholder="Your Phone"
                    value={bookVisit.number}
                    onChange={(e) =>
                      setBookVisit({ ...bookVisit, number: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col book_form_col">
                  <select
                    name
                    id="testimonial_budget"
                    className="testimonial_budget_select"
                    value={bookVisit.persons}
                    onChange={(e) =>
                      setBookVisit({ ...bookVisit, persons: e.target.value })
                    }
                  >
                    <option value={0}>Number of persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
                <div className="col book_form_col">
                  <select
                    name
                    id="testimonial_time"
                    className="testimonial_budget_select"
                    value={bookVisit.time}
                    onChange={(e) =>
                      setBookVisit({ ...bookVisit, time: e.target.value })
                    }
                  >
                    <option value={0}>Select time</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="1:00">1:00</option>
                    <option value="1:30">1:30</option>
                    <option value="2:00">2:00</option>
                    <option value="2:30">2:30</option>
                    <option value="3:00">3:00</option>
                    <option value="3:30">3:30</option>
                    <option value="4:00">4:00</option>
                    <option value="4:30">4:30</option>
                    <option value="5:00">5:00</option>
                    <option value="5:30">5:30</option>
                    <option value="6:00">6:00</option>
                    <option value="6:30">6:30</option>
                    <option value="7:00">7:00</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col book_form_col">
                  <input
                    type="date"
                    id="testimonial_date"
                    placeholder="Your Phone"
                    value={bookVisit.date}
                    onChange={(e) =>
                      setBookVisit({ ...bookVisit, date: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-primary number about_button mt-4"
                    onClick={bookavisit}
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
            For further information,
            <br />
            contact us now
          </h1>
        </div>
      </section>
      {/* ************** Testimonials end ************** */}
      {/* ************** Contact us ************** */}
      <div className="container contact_form">
        <div className="row contact_row">
          <div className="col-lg-6 col-12 contact_col contact_image">
            <h1>Buy your dream project now</h1>
            <p>
              Fill in your information and tell us about your idea, our team
              will contact you promptly. They will be pleased to share further
              details regarding the project, SkyView.
            </p>
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
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col form_col">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col form_col">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Your Phone"
                  value={form.number}
                  onChange={(e) => setForm({ ...form, number: e.target.value })}
                />
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
                    padding: "7px 10px",
                    fontSize: "17px",
                    outline: "none",
                    width: "100%",
                    borderRadius: 4,
                  }}
                  value={form.detail}
                  onChange={(e) => setForm({ ...form, detail: e.target.value })}
                />
                <button
                  type="button"
                  className="btn btn-primary number about_button mt-5"
                  onClick={send}
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
