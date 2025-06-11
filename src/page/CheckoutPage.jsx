import React from "react";
import { Headercheckout } from "../components/CheckoutHeader";
import { Pembayaran } from "../components/Checkout";
import { Footer } from "../components/Footer";

const Checkout = () => {
    return (
        <>
        <div className="bg-Secondary">
            < Headercheckout />
            < Pembayaran />
            < Footer />
        </div>
        </>
    )
}

export { Checkout }