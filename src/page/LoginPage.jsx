import React from "react";
import { Header } from "../components/Headerlogin";
import { Masuk } from "../components/MainLogin";
import { Footer } from "../components/Footer";

const Login = () => {
    return(
        <>
        <div className="bg-Secondary">
            <Header />
            <Masuk/>
            <Footer />
        </div>
        </>
    )
}
export { Login }