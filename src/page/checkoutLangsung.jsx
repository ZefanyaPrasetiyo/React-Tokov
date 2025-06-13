import React from "react";
import { Headercheckout } from "../components/CheckoutHeader";
import { PembayaranLangsung } from "../components/checkoutLangsung";
import { Footer } from "../components/Footer";

const Checkoutlangsung = () => {
    return (
        <>
        <div className="bg-Secondary">
            < Headercheckout />
            < PembayaranLangsung />
            < Footer />
        </div>
        </>
    )
}

export { Checkoutlangsung }