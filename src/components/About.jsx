import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/About.css";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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

      <section className="about-banner">
        <span>OUR STORY</span>
        <h1>Growing a Healthier Tomorrow</h1>
        <p>Discover the ideas and values behind ORGANIVA.</p>
        <div><Link to="/">Home</Link> / About</div>
      </section>

      <section className="about-story">
        <div className="about-story-image" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000"
            alt="Green farm and growing fields"
          />
          <div className="about-image-note">
            <i className="bi bi-leaf-fill"></i>
            <strong>Closer to Nature</strong>
            <span>Thoughtful everyday choices</span>
          </div>
        </div>

        <div className="about-story-content" data-aos="fade-left">
          <span>WELCOME TO ORGANIVA</span>
          <h2>Good Food Begins with Good Choices</h2>
          <p>
            ORGANIVA is an organic and natural food store concept built around
            the simple joy of discovering fresh ingredients for everyday meals.
          </p>
          <p>
            We believe shopping for food should feel simple, inspiring, and
            connected to nature. Our goal is to make it easier to explore
            produce, pantry staples, and wholesome everyday essentials.
          </p>

          <div className="about-checks">
            <p><i className="bi bi-check-circle-fill"></i> A fresh and welcoming shopping experience</p>
            <p><i className="bi bi-check-circle-fill"></i> A thoughtful selection of food categories</p>
            <p><i className="bi bi-check-circle-fill"></i> Simple browsing and convenient ordering</p>
          </div>

          <Link to="/products" className="about-button">
            Explore Products <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading" data-aos="fade-up">
          <span>WHAT GUIDES US</span>
          <h2>Our Mission & Values</h2>
          <p>Creating a thoughtful experience for everyday food shopping.</p>
        </div>

        <div className="about-values-grid">
          <article data-aos="fade-up">
            <div><i className="bi bi-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>
              To make exploring natural food choices easy, welcoming, and
              convenient for every customer.
            </p>
          </article>

          <article data-aos="fade-up" data-aos-delay="100">
            <div><i className="bi bi-eye"></i></div>
            <h3>Our Vision</h3>
            <p>
              To inspire everyday habits that bring people closer to fresh
              ingredients and mindful food choices.
            </p>
          </article>

          <article data-aos="fade-up" data-aos-delay="200">
            <div><i className="bi bi-heart"></i></div>
            <h3>Our Values</h3>
            <p>
              We value care, transparency, convenience, and a lasting connection
              with nature.
            </p>
          </article>
        </div>
      </section>

      <section className="about-quote" data-aos="zoom-in">
        <i className="bi bi-quote"></i>
        <h2>Small Choices Today Can Inspire Better Habits Tomorrow.</h2>
        <p>ORGANIVA — Fresh choices. Happier living.</p>
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

export default About;