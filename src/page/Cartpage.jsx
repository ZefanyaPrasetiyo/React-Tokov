import React from "react";
import { Headercart } from "../components/Headercart";
import { Maincart } from "../components/MainCart";
import { Footer } from "../components/Footer";

const Cart = () => {
    return(
        <>
        <div className="bg-Secondary">
            < Headercart />
            < Maincart />
            < Footer />
        </div>
        </>
    )
}

export { Cart }