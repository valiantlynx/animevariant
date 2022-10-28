import React from "react";
import { Routes, Route } from "react-router-dom";
import Minter from "./Minter";
import Anime from "../anime/Anime";
import Manga from "../manga/Manga";
import Profile from "./Profile";
import Docs from "./Docs";
import LandingPage from "./LandingPage";


function Body(props) {


    return (
        <Routes >
            <Route  exact path="/" element={<LandingPage />} />
            <Route  path="/discover" element={props.listingGallery} />
            <Route path="/minter" element={<Minter />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga />} />
            <Route  path="/collection" element={props.useOwnedGallery} />
            <Route path="/docs" element={<Docs currentPrincipalID={props.currentPrincipalID}/>} />
            <Route path="/profile" element={<Profile currentPrincipalID={props.currentPrincipalID}/>} />

        </Routes>
    );
}

export default Body;
