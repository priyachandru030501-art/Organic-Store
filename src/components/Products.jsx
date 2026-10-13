import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Products.css";

const productList = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    price: 180,
    unit: "1 kg",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600",
  },
  {
    id: 2,
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 90,
    unit: "500 g",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600",
  },
  {
    id: 3,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: 60,
    unit: "1 kg",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600",
  },
  {
    id: 4,
    name: "Strawberries",
    category: "Fruits",
    price: 150,
    unit: "250 g",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600",
  },
  {
    id: 5,
    name: "Fresh Avocado",
    category: "Fruits",
    price: 120,
    unit: "2 pieces",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600",
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    unit: "500 g",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
  },
  {
    id: 7,
    name: "Organic Spinach",
    category: "Vegetables",
    price: 35,
    unit: "1 bunch",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600",
  },
  {
    id: 8,
    name: "Fresh Lemons",
    category: "Fruits",
    price: 50,
    unit: "500 g",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=600",
  },
];

function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("organivaCart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    const updated = existing
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("organivaCart", JSON.stringify(updated));
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts =
    filter === "All"
      ? productList
      : productList.filter((product) => product.category === filter);

  return (
    <>
      {/* NAVBAR */}
      <nav className="organic-navbar">
        <div className="organic-nav-container">
          <Link to="/" className="organic-brand">
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

      {/* PAGE BANNER */}
      <section className="products-banner">
        <span>FRESHNESS YOU CAN TRUST</span>
        <h1>Our Products</h1>
        <p>Discover natural favourites for your everyday table.</p>
        <div><Link to="/">Home</Link> / Products</div>
      </section>

      {/* PRODUCTS */}
      <section className="products-page-section">
        <div className="products-heading">
          <div>
            <span>OUR COLLECTION</span>
            <h2>Explore Fresh Produce</h2>
          </div>

          <div className="products-filter">
            {["All", "Fruits", "Vegetables"].map((category) => (
              <button
                key={category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <article
              className="products-card"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 70}
            >
              <div className="products-image">
                <img src={product.image} alt={product.name} />
                <span className="products-badge">Fresh Pick</span>
              </div>

              <div className="products-card-info">
                <span className="products-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.unit}</p>

                <div className="products-card-bottom">
                  <strong>₹{product.price}</strong>
                  <button onClick={() => addToCart(product)}>
                    <i className="bi bi-bag-plus"></i> Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
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

export default Products;