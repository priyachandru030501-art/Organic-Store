
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Categories from "./components/Categories.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
