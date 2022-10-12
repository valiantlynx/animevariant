import React, { useEffect, useState } from "react";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import Anime from "./Anime";
import { animeVariant_backend } from "../../../declarations/animeVariant_backend";
import { AuthClient } from '@dfinity/auth-client';
import Manga from "./Manga";
import LandingPage from "./LandingPage";


function Body() {
    const [useOwnedGallery, setOwnedGallery] = useState();
    const [listingGallery, setListingGallery] = useState();


    async function getNFTs() {
        const authClient = await AuthClient.create();
        //is already logged in within 8 days
        if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {

            handleAuthenticated(authClient);
        } else {
            //log in
            await authClient.login({
                identityProvider: "https://identity.ic0.app/#authorize",
                onSuccess: () => {
                    handleAuthenticated(authClient);
                }
            });
        }

        async function handleAuthenticated(authClient) {
            const identity = await authClient.getIdentity();
            const loggedInPrincipal = identity.getPrincipal();


            const userNFTIds = await animeVariant_backend.getOwnedNFTs(loggedInPrincipal);
            //console.log("principal of all nfts;" + userNFTIds);
            setOwnedGallery(<Gallery title="My NFTs" ids={userNFTIds} role="collection" />);

            const listedNFTIds = await animeVariant_backend.getListedNFTs();
            //console.log(listedNFTIds);
            setListingGallery(<Gallery title="Discover" ids={listedNFTIds} role="discover" />);

        }
    };

    useEffect(() => {
        getNFTs();
    }, []);
    return (        
                <Routes >
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/discover" element={listingGallery} />
                    <Route path="/minter" element={<Minter />} />
                    <Route path="/anime" element={<Anime />} />
                    <Route path="/manga" element={<Manga />} />
                    <Route path="/collection" element={useOwnedGallery} />
                </Routes>
    );
}

export default Body;
