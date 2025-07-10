import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-green-700 px-4 md:px-16 text-white shadow-md sticky top-0 z-50">
      <div className="sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">Ayurved</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-yellow-300">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-300">
              About Us
            </a>
            <a href="/contact" className="hover:text-yellow-300">
              Contact Us
            </a>
            <Link to="/products" className="hover:text-yellow-300">
              Products
            </Link>

            {/* Auth Buttons Inline */}
            {!user ? (
              <>
                <Link to="/login" className="hover:text-yellow-300">
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-300 text-green-800 px-3 py-1 rounded hover:bg-yellow-400"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm">Hi, {user.name.split(" ")[0]}</span>
                <button
                  onClick={logout}
                  className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 px-4 py-3 space-y-2">
          <a href="/" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="/about" className="block hover:text-yellow-300">
            About Us
          </a>
          <a href="/contactus" className="block hover:text-yellow-300">
            Contact Us
          </a>
          <Link to="/products" className="block hover:text-yellow-300">
            Products
          </Link>

          {/* Mobile Category Dropdown */}

          {/* Mobile Auth Buttons */}
          {!user ? (
            <div className="pt-4 border-t border-white space-y-2">
              <Link to="/login" className="block hover:text-yellow-300">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block bg-yellow-300 text-green-800 px-3 py-1 rounded text-center hover:bg-yellow-400"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <div className="pt-4 border-t border-white space-y-2">
              <span className="block">Hi, {user.name.split(" ")[0]}</span>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-red-200 hover:text-white"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
