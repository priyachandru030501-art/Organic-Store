import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Cart.css";

function Cart() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const savedCart = JSON.parse(localStorage.getItem("organivaCart")) || [];
    setCart(savedCart);
  }, []);

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("organivaCart", JSON.stringify(updatedCart));
  };

  const changeQuantity = (id, amount) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 40;
  const total = subtotal + delivery;

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

      <section className="cart-banner">
        <span>YOUR ORGANIVA BASKET</span>
        <h1>Shopping Cart</h1>
        <p>Review your fresh picks before checkout.</p>
        <div><Link to="/">Home</Link> / Cart</div>
      </section>

      <section className="cart-page">
        <div className="cart-main" data-aos="fade-up">
          <div className="cart-heading">
            <h2>Your Items</h2>
            <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} items</span>
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <i className="bi bi-basket"></i>
              <h3>Your basket is empty</h3>
              <p>Explore our products and find something fresh.</p>
              <Link to="/products">Start Shopping</Link>
            </div>
          ) : (
            cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.unit}</p>
                  <strong>₹{item.price}</strong>

                  <div className="cart-quantity">
                    <button
                      onClick={() => changeQuantity(item.id, -1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <i className="bi bi-dash"></i>
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => changeQuantity(item.id, 1)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-item-end">
                  <strong>₹{item.price * item.quantity}</strong>
                  <button
                    className="cart-remove"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <i className="bi bi-trash3"></i> Remove
                  </button>
                </div>
              </article>
            ))
          )}

          {cart.length > 0 && (
            <Link to="/products" className="cart-continue">
              <i className="bi bi-arrow-left"></i> Continue Shopping
            </Link>
          )}
        </div>

        <aside className="cart-summary" data-aos="fade-left">
          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Subtotal</span>
            <strong>₹{subtotal}</strong>
          </div>

          <div className="cart-summary-row">
            <span>Delivery</span>
            <strong>{delivery === 0 ? "FREE" : `₹${delivery}`}</strong>
          </div>

          {subtotal > 0 && subtotal < 499 && (
            <p className="cart-delivery-note">
              Add ₹{499 - subtotal} more to qualify for free delivery.
            </p>
          )}

          <div className="cart-summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button
            className="cart-checkout"
            disabled={cart.length === 0}
            onClick={() =>
              alert("Checkout demo: Connect a payment service to accept real orders.")
            }
          >
            Proceed to Checkout <i className="bi bi-arrow-right"></i>
          </button>

          <p className="cart-secure">
            <i className="bi bi-shield-check"></i>
            Secure checkout demo
          </p>

          <div className="cart-payment-note">
            <i className="bi bi-truck"></i>
            <span>Free delivery on orders of ₹499 or more.</span>
          </div>
        </aside>
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

export default Cart;