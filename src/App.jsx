import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Toys from "./pages/Toys";
import Food from "./pages/Food";
import Household from "./pages/Household";
import Furniture from "./pages/Furniture";
import Electronic from "./pages/Electronic";
import Petfood from "./pages/Petfood";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/toy" element={<Toys />} />
        <Route path="/food" element={<Food />} />
        <Route path="/household" element={<Household />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="electonic" element={<Electronic />} />
        <Route path="petfood" element={<Petfood />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
