import React from "react";
import { Headerdetail } from "../components/HeaderDetail";
import { DetailProduct } from "../components/Detailproduk";
import { PencarianKamuhome } from "../components/PencariankamuHome";
import { Footer } from "../components/Footer";

const Detail = () => {
    return(
        <>
        <div className="bg-Secondary">
        < Headerdetail />
        < DetailProduct/>
        < PencarianKamuhome />
        < Footer />
        </div>
        </>
    )
}
export { Detail }