import React from "react";
import { FaTags } from "react-icons/fa6";

import IconPerhiasan from "../assets/svg/map--jewelry-store.svg";
import IconElektronik from "../assets/svg/material-symbols-light--computer-outline.svg";
import IconPakaianWanita from "../assets/svg/ph--dress-fill.svg";
import IconPakaianPria from "../assets/svg/ion--shirt.svg";

const dataKategori = [
  { nama: "PERHIASAN", gambar: IconPerhiasan },
  { nama: "ELEKTRONIK", gambar: IconElektronik },
  { nama: "PAKAIAN PEREMPUAN", gambar: IconPakaianWanita },
  { nama: "PAKAIAN PRIA", gambar: IconPakaianPria },
];

const Kategori = () => {
  return (
    <div className="bg-white mt-12 shadow-md rounded-xl">
      <div>
        <div className="h-16 p-4 shadow-md flex flex-row items-center gap-2">
          <FaTags className="text-3xl text-Primary hover:text-blue-800" />
          <h1 className="font-bold text-2xl">Kategori</h1>
        </div>
        <div className="flex flex-wrap justify-center py-6 px-4 gap-10">
          {dataKategori.map((kategori, index) => (
            <div
              key={index}
              className="kategori-item group shadow-xl relative w-fit rounded-xl transition duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => {
                console.log("Klik kategori:", kategori.nama);
              }}
            >
              {/* Overlay: muncul saat hover */}
              <div className="absolute top-0 left-0 w-60 h-32 bg-gradient-to-t from-Primary rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-center font-bold text-lg text-white">
                  {kategori.nama}
                </p>
              </div>

              {/* Gambar kategori */}
              <div className="bg-white w-60 h-32 flex justify-center items-center rounded-xl">
                <img
                  src={kategori.gambar}
                  alt={`Icon ${kategori.nama}`}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Kategori };
