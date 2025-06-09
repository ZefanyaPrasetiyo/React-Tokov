import React from "react";
import { NavbarhomePage } from "../components/navbarhomePage";
import { Routes, Route } from "react-router-dom";

function Homepage() {
    return (
        <>
        <Routes>
            <Route path="/" element={<NavbarhomePage/>}/>
        </Routes>
        </>
    )
}