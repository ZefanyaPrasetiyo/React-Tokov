import React from "react";
import { Header } from "../components/Headerlogin";
import { Mainregister } from "../components/MainRegister";
import { Footer } from "../components/Footer";
const Register = () => {
    return (
        <>
        <div className="bg-Secondary">
        <Header/>
        <Mainregister/>
        <Footer/>
        </div>
        </>
    )
}

export { Register }