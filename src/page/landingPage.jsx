import React from "react";
import { NavbarLanding } from "../components/navbarLandng";
import { Alamatuser } from "../components/alamat";
import { ImageSlider } from "../components/bannerPromo";
import { Kategori } from "../components/kategori";
import { Terlaris } from "../components/Terlaris";
import { PencarianKamu } from "../components/PencarianKamu";
import { ListProduk } from "../components/ListProduk";
import { Fitur } from "../components/Fitur";
import { Footer } from "../components/Footer";
const Landingpage = () => {
  return (
    <div className="bg-Secondary">
      <NavbarLanding />
      <Alamatuser />
      <ImageSlider />
      < Kategori />
      < Terlaris />
      < PencarianKamu />
      < ListProduk />
      < Fitur />
      < Footer />
    </div>
  );
};

export { Landingpage };
