import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <Link to="/" className="hover:text-gray-900" href="#">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-900" href="#">
            About
          </Link>
          <Link to="/" className="hover:text-gray-900" href="#">
            Services
          </Link>
          <Link to="/" className="hover:text-gray-900" href="#">
            Blogs
          </Link>
          <Link to="/" className="hover:text-gray-900" href="#">
            Portfolio 
          </Link>
          <Link to="/" className="hover:text-gray-900" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex justify-center space-x-5">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </Link>
          <Link
            to="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </Link>
        </div>
        <p className="text-center text-gray-700 font-medium">
          © 2025 Company Ltd. All rights reservered.
        </p>
      </footer>
    </>
  );
}

export default Footer;
