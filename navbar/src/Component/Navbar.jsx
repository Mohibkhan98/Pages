import React from "react";
import '../Navbar.css';


const Navbar = () => {
  return (
    <div>
      <nav className="nav-port">
        <div className="logo-port">
          <span>M</span>ohib <span>K</span>han
        </div>
        <ul className="menu-port">
          <li className="home-menu">Home</li>
          <li className="product-menu">Product</li>
          <li className="blog-menu">Blog</li>
          <li className="contact-menu">Contact</li>
        </ul>
        <button className="login-port">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
