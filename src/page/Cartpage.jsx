import React from "react";
import { NavbarhomePage } from "../components/navbarhomePage";
import { Maincart } from "../components/MainCart";
import { Footer } from "../components/Footer";

const Cart = () => {
    return(
        <>
        <div className="bg-Secondary overflow-y-hidden">
            < NavbarhomePage />
            < Maincart />
            < Footer />
        </div>
        </>
    )
}

export { Cart }