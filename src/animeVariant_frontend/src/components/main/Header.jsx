import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { BrowserRouter } from "react-router-dom";
import Body from "./Body";
import { AuthClient } from '@dfinity/auth-client';
import Gallery from "./Gallery";
import { animeVariant_backend } from "../../../../../declarations/animeVariant_backend";
import Navbar from "./Navbar";



function Header(props) {
  const { register, handleSubmit } = useForm();

  const [useOwnedGallery, setOwnedGallery] = useState();
  const [listingGallery, setListingGallery] = useState();

  async function getNFTs() {
    const authClient = await AuthClient.create();

    //is already logged in within 8 days
    if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {

      handleAuthenticated(authClient);
    } else {
      //log in
      login();


    };

    //logging in
    async function login() {
      await authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: () => {
          handleAuthenticated(authClient);
        },

      });

    };



    async function handleAuthenticated(authClient) {
      const identity = await authClient.getIdentity();
      const loggedInPrincipal = identity.getPrincipal();


      const userNFTIds = await animeVariant_backend.getOwnedNFTs(loggedInPrincipal);
      //console.log("principal of all nfts;" + userNFTIds);
      setOwnedGallery(<Gallery title="My NFTs" ids={userNFTIds} role="collection" />);

      const listedNFTIds = await animeVariant_backend.getListedNFTs();
      //console.log(listedNFTIds);
      setListingGallery(<Gallery title="Gallery" ids={listedNFTIds} role="discover" />);
    };

  }
  // useEffect(() => {
  //   getNFTs();
  // }, []);




  //logging in
  async function logout() {
    const authClient = await AuthClient.create();
    await authClient.logout({ returnTo: "#" });

  };

  return (
    <BrowserRouter >
      <Navbar
        handleClick={handleSubmit(getNFTs)}
        handleClick1={handleSubmit(getNFTs)}
        handleClick2={handleSubmit(getNFTs)}
        handleClick3={handleSubmit(logout)}
      />

      <Body listingGallery={listingGallery} useOwnedGallery={useOwnedGallery} currentPrincipalID={props.currentPrincipalID} />
    </BrowserRouter>
  );
}

export default Header;
