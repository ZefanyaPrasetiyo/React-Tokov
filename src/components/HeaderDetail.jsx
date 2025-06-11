import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const Headerdetail = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleToggleClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLihatProfil = () => {
    window.location.href = "../html/Profile.html";
  };

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("keranjang");
    localStorage.removeItem("wishlist");
    window.location.href = "../html/Login.html";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleRef.current &&
        dropdownRef.current &&
        !toggleRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white p-4 shadow-md">
        <div className="flex flex-col">
          {/* Promo */}
          <div className="flex justify-end items-end text-sm flex-wrap">
            <div className="flex gap-6 bg-Primary p-2 rounded-xl text-white font-bold">
              <p className="cursor-pointer hover:underline">Tentang TOKOV</p>
              <p className="cursor-pointer hover:underline">Promo</p>
              <p className="cursor-pointer hover:underline">Mulai Belanja</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center justify-between flex-wrap gap-4 mt-4 sm:flex-row w-full md:w-auto">
            <div className="flex flex-row items-center gap-4">
              <h1 className="text-3xl font-bold text-Primary">TOKOV</h1>
              <div className="w-90 md:60 sm:30 h-12 sm:80 p-2 border-2 border-gray-300 rounded-md flex items-center justify-between">
                <input
                  type="text"
                  id="cariInput"
                  placeholder="Cari produk, kategori, atau merek..."
                  className="w-90 outline-none focus:outline-none"
                  onInput={() => console.log("Searching...")}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#4b4b4b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <button>
                <FaShoppingCart className="text-3xl text-Primary hover:text-blue-800 transition-duration-300" />
              </button>
              <button>
                <MdFavorite className="text-3xl text-Primary hover:text-blue-800 transition-duration-300" />
              </button>

              <span className="text-2xl opacity-20">|</span>

              {/* Dropdown User */}
              <div className="relative flex flex-col items-end">
                <div
                  ref={toggleRef}
                  onClick={handleToggleClick}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src="../image/Group 93.png"
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h1 className="text-md">Zefanya</h1>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {dropdownVisible && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    <button
                      onClick={handleLihatProfil}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Lihat Profil
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Headerdetail };
