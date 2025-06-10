import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";


const NavbarLanding = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="sticky top-0 z-50 bg-white p-4 shadow-md">
        <div className="flex flex-col">
          {/* Promo */}
          <div className="flex justify-between items-end text-sm flex-wrap">
            <div className="flex gap-6 bg-Primary p-2 rounded-xl text-white font-bold">
              <p className="cursor-pointer hover:text-primary">
                Banyak promo + gratis ongkir jika{" "}
                <span className="hover:underline">Masuk/Daftar</span>
              </p>
            </div>
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

                <button onClick={()=>{
                  navigate("/Loginpage")
                }} className="h-10 px-4 border border-Primary text-Primary font-bold rounded-xl text-sm hover:bg-Primary hover:text-white transition">
                  Masuk
                </button>

              <button onClick={()=>{
                navigate("/Registerpage")
              }} className="h-10 px-4 border border-Primary text-Primary font-bold rounded-xl text-sm hover:bg-Primary hover:text-white transition">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NavbarLanding };
