import React from "react";
import { Header } from "../components/Headerlogin";
import { Signin } from "../components/MainLogin";
import { Footer } from "../components/Footer";

const Login = () => {
    return(
        <>
        <div className="bg-Secondary">
            <Header />
            <Signin/>
            <Footer />
        </div>
        </>
    )
}
export { Login }