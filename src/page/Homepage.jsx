import React from "react";
import { NavbarhomePage } from "../components/navbarhomePage";
import { ImageSlider } from "../components/bannerPromo";
import { Kategori } from "../components/kategori";
import { Terlarishome } from "../components/Terlarishome";
import { PencarianKamuhome } from "../components/PencariankamuHome";
import { ListProdukhome } from "../components/ListprodukHome";
import { Alamatuser } from "../components/alamat";
import { Footer } from "../components/Footer";

function Homepage() {
    return (
        <>
        <div className="bg-Secondary">
        <NavbarhomePage/>
        <Alamatuser/>
        <ImageSlider/>
        <Kategori/>
        <Terlarishome/>
        <PencarianKamuhome/>
        <ListProdukhome/>
        <Footer/>
        </div>
        </>
    )
}

export { Homepage }