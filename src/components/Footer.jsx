import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div>
          <h2 className="text-xl font-bold text-red-500">VELORA</h2>
          <p className="mt-2 text-sm">Classic looks for Men, Women & Kids.</p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaInstagram className="hover:text-red-400 cursor-pointer" />
            <FaFacebook className="hover:text-red-400 cursor-pointer" />
            <FaLinkedin className="hover:text-red-400 cursor-pointer" />
            <FaTwitter className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">Shop</li>
            <li className="hover:text-red-400 cursor-pointer">About</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Mens Wear</li>
            <li className="hover:text-red-400 cursor-pointer">Womens Wear</li>
            <li className="hover:text-red-400 cursor-pointer">Kids Wear</li>
            <li className="hover:text-red-400 cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">FAQ's</li>
            <li className="hover:text-red-400 cursor-pointer">Return Policy</li>
            <li className="hover:text-red-400 cursor-pointer">Order Status</li>
            <li className="hover:text-red-400 cursor-pointer">Shipping & Delivery</li>
          </ul>
        </div>

        {/* My Profile */}
        <div>
          <h3 className="font-bold mb-3">My Profile</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">My Account</li>
            <li className="hover:text-red-400 cursor-pointer">Track Order</li>
            <li className="hover:text-red-400 cursor-pointer">My Cart</li>
            <li className="hover:text-red-400 cursor-pointer">Order History</li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
}
