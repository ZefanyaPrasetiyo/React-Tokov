import React from "react";
import { NavbarhomePage } from "../components/navbarhomePage";
import { DetailProduct } from "../components/Detailproduk";
import { PencarianKamuhome } from "../components/PencariankamuHome";
import { Footer } from "../components/Footer";

const Detail = () => {
    return(
        <>
        <div className="bg-Secondary">
        < NavbarhomePage />
        < DetailProduct/>
        < PencarianKamuhome />
        < Footer />
        </div>
        </>
    )
}
export { Detail }