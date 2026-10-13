import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Contact.css";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for contacting ORGANIVA! Your message has been submitted.");
    event.target.reset();
  };

  return (
    <>
      <nav className="organic-navbar">
        <div className="organic-nav-container">
          <Link to="/" className="organic-brand">
            <span className="brand-icon"><i className="bi bi-leaf-fill"></i></span>
            <span className="brand-text">ORGANIVA<small>ORGANIC & NATURAL FOODS</small></span>
          </Link>

          <button className="organic-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <div className={`organic-navlinks ${menuOpen ? "show" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/cart" className="organic-cart-button" onClick={() => setMenuOpen(false)}>
              <i className="bi bi-basket2-fill"></i> My Cart
            </Link>
          </div>
        </div>
      </nav>

      <section className="contact-banner">
        <span>WE WOULD LOVE TO HEAR FROM YOU</span>
        <h1>Let's Talk Fresh</h1>
        <p>Have a question? Send us a message.</p>
        <div><Link to="/">Home</Link> / Contact</div>
      </section>

      <section className="contact-page">
        <div className="contact-info" data-aos="fade-right">
          <span>GET IN TOUCH</span>
          <h2>We're Here to Help</h2>
          <p>
            Have questions about our products or website? Send us a message
            using the form, and we'll be happy to hear from you.
          </p>

          <div className="contact-info-card">
            <div><i className="bi bi-geo-alt-fill"></i></div>
            <section>
              <h3>Our Location</h3>
              <p>Bengaluru, Karnataka, India</p>
            </section>
          </div>

          <div className="contact-info-card">
            <div><i className="bi bi-envelope-fill"></i></div>
            <section>
              <h3>Email Us</h3>
              <p>hello@organiva.example</p>
            </section>
          </div>

          <div className="contact-info-card">
            <div><i className="bi bi-clock-fill"></i></div>
            <section>
              <h3>Working Hours</h3>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </section>
          </div>

          <div className="contact-leaf-decoration">
            <i className="bi bi-leaf-fill"></i>
            <span>Fresh choices. Happier living.</span>
          </div>
        </div>

        <div className="contact-form-card" data-aos="fade-left">
          <h2>Send Us a Message</h2>
          <p>Fill in the details below.</p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contactName">Full Name</label>
                <input
                  id="contactName"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  id="contactEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contactSubject">Subject</label>
              <input
                id="contactSubject"
                type="text"
                placeholder="What is your message about?"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contactMessage">Message</label>
              <textarea
                id="contactMessage"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message <i className="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>

      <section className="contact-bottom-banner">
        <i className="bi bi-chat-heart"></i>
        <h2>Your Feedback Matters</h2>
        <p>We're always looking for ways to make your shopping experience better.</p>
      </section>

      <footer className="organic-footer">
        <div className="organic-footer-grid">
          <div className="organic-footer-about">
            <Link to="/" className="organic-brand footer-brand">
              <span className="brand-icon"><i className="bi bi-leaf-fill"></i></span>
              <span className="brand-text">ORGANIVA<small>ORGANIC & NATURAL FOODS</small></span>
            </Link>
            <p>Fresh inspiration and natural food choices for your everyday table.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
          </div>
          <div>
            <h4>Information</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">My Cart</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <p><i className="bi bi-geo-alt"></i> Bengaluru, India</p>
            <p><i className="bi bi-envelope"></i> hello@organiva.example</p>
          </div>
        </div>
        <div className="organic-footer-bottom">
          <p>© 2026 ORGANIVA. All rights reserved.</p>
          <p>Fresh choices. Happier living.</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;