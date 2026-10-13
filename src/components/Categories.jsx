import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Categories.css";

function Categories() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categories = [
    {
      name: "Fresh Vegetables",
      description: "Greens and vegetables for everyday cooking.",
      icon: "bi-flower1",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    },
    {
      name: "Organic Fruits",
      description: "A colourful collection of fruit favourites.",
      icon: "bi-apple",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800",
    },
    {
      name: "Grains & Cereals",
      description: "Pantry essentials for everyday meals.",
      icon: "bi-basket2",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800",
    },
    {
      name: "Nuts & Seeds",
      description: "Crunchy ingredients for your kitchen.",
      icon: "bi-nut",
      image: "https://images.unsplash.com/photo-1505576399274-565b52d4ac71?w=800",
    },
    {
      name: "Herbs & Spices",
      description: "Bring colour and flavour to your dishes.",
      icon: "bi-flower2",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800",
    },
    {
      name: "Healthy Snacks",
      description: "Delicious options for snack time.",
      icon: "bi-cup-straw",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    },
  ];

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

      <section className="categories-banner">
        <span>GOODNESS IN EVERY CATEGORY</span>
        <h1>Explore Our Categories</h1>
        <p>Find inspiration for a fresh and wholesome kitchen.</p>
        <div><Link to="/">Home</Link> / Categories</div>
      </section>

      <section className="categories-page">
        <div className="categories-heading" data-aos="fade-up">
          <span>DISCOVER ORGANIVA</span>
          <h2>Something Fresh for Everyone</h2>
          <p>Browse our collection of everyday grocery essentials.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <article
              className="categories-card"
              key={category.name}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="categories-image">
                <img src={category.image} alt={category.name} />
                <span className="categories-icon">
                  <i className={`bi ${category.icon}`}></i>
                </span>
              </div>

              <div className="categories-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link to="/products">
                  Shop Collection <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="categories-cta" data-aos="zoom-in">
          <i className="bi bi-basket2"></i>
          <h2>Ready to Fill Your Basket?</h2>
          <p>Explore our available products and find your everyday favourites.</p>
          <Link to="/products">Browse Products <i className="bi bi-arrow-right"></i></Link>
        </div>
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

export default Categories;