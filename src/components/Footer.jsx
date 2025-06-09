import React from "react";
import LogoTokov from "../assets/image/Group 71.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-Primary to-blue-800 mt-12 px-8 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-sm">

        {/* Tentang TOKOV */}
        <div>
          <h2 className="font-bold text-base mb-2">Tentang TOKOV</h2>
          <p className="leading-relaxed">
            TOKOV ADALAH<br />
            WEBSITE E-COMMERCE<br />
            YANG ISINYA PRODUK<br />
            ASLI DAN BERKUALITAS<br />
            DENGAN BANYAK PROMO
          </p>
        </div>

        {/* Bantuan & Panduan */}
        <div>
          <h2 className="font-bold text-base mb-2">Bantuan & Panduan</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">TOKOV CARE</a></li>
            <li><a href="#" className="hover:underline">SYARAT & KETENTUAN</a></li>
            <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-bold text-base mb-2">Social Media</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Tiktok</a></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-start">
          <img src={LogoTokov} alt="Logo TOKOV" className="w-40 h-auto" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-white mt-4">
        &copy; 2025 TOKOV. All rights reserved.
      </div>
    </footer>
  );
};

export { Footer };
