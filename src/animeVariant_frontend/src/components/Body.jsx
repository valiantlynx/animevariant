import React from "react";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import Minter from "./Minter";
import Anime from "./Anime";
import Manga from "./Manga";
import LandingPage from "./LandingPage";


function Body(props) {


    return (
        <Routes >
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/discover" element={props.listingGallery} />
            <Route path="/minter" element={<Minter />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
            <Route path="/collection" element={props.useOwnedGallery} />
        </Routes>
    );
}

export default Body;
