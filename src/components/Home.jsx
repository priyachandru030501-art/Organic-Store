import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const categories = [
    {
      name: "Fresh Vegetables",
      icon: "bi-flower1",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700",
    },
    {
      name: "Organic Fruits",
      icon: "bi-apple",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700",
    },
    {
      name: "Healthy Grains",
      icon: "bi-basket",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700",
    },
    {
      name: "Nuts & Seeds",
      icon: "bi-nut",
      image:
        "https://images.unsplash.com/photo-1505576399274-565b52d4ac71?w=700",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Organic Apples",
      price: 180,
      unit: "1 kg",
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600",
    },
    {
      id: 2,
      name: "Fresh Broccoli",
      price: 90,
      unit: "500 g",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600",
    },
    {
      id: 3,
      name: "Fresh Carrots",
      price: 60,
      unit: "1 kg",
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600",
    },
    {
      id: 4,
      name: "Fresh Strawberries",
      price: 150,
      unit: "250 g",
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600",
    },
  ];

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("organivaCart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;

    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("organivaCart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="organic-navbar">
        <div className="organic-nav-container">
          <Link
            to="/"
            className="organic-brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-icon">
              <i className="bi bi-leaf-fill"></i>
            </span>

            <span className="brand-text">
              ORGANIVA
              <small>ORGANIC & NATURAL FOODS</small>
            </span>
          </Link>

          <button
            className="organic-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <div className={`organic-navlinks ${menuOpen ? "show" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/categories" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link
              to="/cart"
              className="organic-cart-button"
              onClick={() => setMenuOpen(false)}
            >
              <i className="bi bi-basket2-fill"></i> My Cart
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="organic-hero">
        <div className="organic-hero-content" data-aos="fade-right">
          <span className="organic-tag">
            <i className="bi bi-flower1"></i> NATURALLY BETTER
          </span>

          <h1>
            Fresh From
            <br />
            <span>Nature's Garden</span>
          </h1>

          <p>
            Bring home the goodness of nature with fresh produce and wholesome
            groceries for your everyday healthy lifestyle.
          </p>

          <div className="organic-hero-buttons">
            <Link to="/products" className="organic-primary-button">
              Shop Now <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/about" className="organic-outline-button">
              Our Story
            </Link>
          </div>

          <div className="organic-statistics">
            <div>
              <h3>Fresh</h3>
              <span>Every Day</span>
            </div>

            <div>
              <h3>Natural</h3>
              <span>Food Choices</span>
            </div>

            <div>
              <h3>Healthy</h3>
              <span>Living</span>
            </div>
          </div>
        </div>

        <div className="organic-hero-image" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
            alt="Fresh vegetables in a grocery market"
          />

          <div className="organic-floating-card">
            <i className="bi bi-heart-pulse-fill"></i>
            <div>
              <strong>Eat Fresh, Live Well</strong>
              <span>Make natural choices</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="organic-benefits">
        <div className="organic-benefit" data-aos="fade-up">
          <i className="bi bi-flower2"></i>
          <div>
            <h4>Natural Choices</h4>
            <p>Thoughtfully selected foods</p>
          </div>
        </div>

        <div className="organic-benefit" data-aos="fade-up" data-aos-delay="100">
          <i className="bi bi-basket2"></i>
          <div>
            <h4>Fresh Selection</h4>
            <p>Everyday grocery essentials</p>
          </div>
        </div>

        <div className="organic-benefit" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-heart"></i>
          <div>
            <h4>Healthy Living</h4>
            <p>Food for your lifestyle</p>
          </div>
        </div>

        <div className="organic-benefit" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-truck"></i>
          <div>
            <h4>Easy Shopping</h4>
            <p>Convenient online browsing</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="organic-section">
        <div className="organic-section-heading" data-aos="fade-up">
          <span>EXPLORE OUR STORE</span>
          <h2>Shop by Category</h2>
          <p>Discover fresh favourites for your kitchen.</p>
        </div>

        <div className="organic-category-grid">
          {categories.map((category, index) => (
            <Link
              to="/categories"
              className="organic-category-card"
              key={category.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={category.image} alt={category.name} />

              <div className="organic-category-overlay">
                <i className={`bi ${category.icon}`}></i>
                <h3>{category.name}</h3>
                <span>
                  Explore <i className="bi bi-arrow-up-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="organic-products-section">
        <div className="organic-section-heading" data-aos="fade-up">
          <span>FRESH PICKS</span>
          <h2>Our Popular Products</h2>
          <p>Explore some of our everyday favourites.</p>
        </div>

        <div className="organic-product-grid">
          {products.map((product, index) => (
            <div
              className="organic-product-card"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="organic-product-image">
                <img src={product.image} alt={product.name} />
                <span className="organic-product-label">Fresh Pick</span>
              </div>

              <div className="organic-product-info">
                <span className="organic-product-unit">{product.unit}</span>
                <h3>{product.name}</h3>

                <div className="organic-product-bottom">
                  <strong>₹{product.price}</strong>

                  <button
                    onClick={() => addToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <i className="bi bi-plus-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="organic-view-all">
          <Link to="/products" className="organic-primary-button">
            View All Products <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="organic-promo" data-aos="zoom-in">
        <div>
          <span>GOOD FOOD STARTS HERE</span>
          <h2>Make Every Meal a Little More Natural</h2>
          <p>
            Explore ingredients that fit your everyday cooking and healthy
            lifestyle.
          </p>
          <Link to="/products" className="organic-promo-button">
            Explore Products
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="organic-footer">
        <div className="organic-footer-grid">
          <div className="organic-footer-about">
            <Link to="/" className="organic-brand footer-brand">
              <span className="brand-icon">
                <i className="bi bi-leaf-fill"></i>
              </span>
              <span className="brand-text">
                ORGANIVA
                <small>ORGANIC & NATURAL FOODS</small>
              </span>
            </Link>

            <p>
              Bringing fresh inspiration and natural food choices to your
              everyday table.
            </p>

            <div className="organic-social">
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About Us</Link>
          </div>

          <div>
            <h4>Customer Care</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/products">Shop Now</Link>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <p>
              <i className="bi bi-geo-alt"></i> Bengaluru, India
            </p>
            <p>
              <i className="bi bi-envelope"></i> hello@organiva.example
            </p>
            <p>
              <i className="bi bi-clock"></i> Monday – Saturday
            </p>
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

export default Home;