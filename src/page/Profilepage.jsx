import React from "react";
import { NavbarhomePage } from "../components/navbarhomePage";
import { Profilemain } from "../components/ProfileMain";
import { Footer } from "../components/Footer";

const Profile = () => {
    return (
        <>
        <div className="bg-Secondary">
        < NavbarhomePage />
        < Profilemain />
        < Footer />
        </div>
        </>
    )
}

export { Profile }