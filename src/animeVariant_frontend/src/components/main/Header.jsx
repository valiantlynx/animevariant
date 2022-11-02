import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/img/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
import Body from "./Body";
import { AuthClient } from '@dfinity/auth-client';
import Gallery from "./Gallery";
import { animeVariant_backend } from "../../../../declarations/animeVariant_backend";



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

  // bring a pop up trying to avoid but i cant run it in a function
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
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              style={{ paddingRight: "20%" }}
              className="navbar-brand company_name d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <img
                src={logo}
                alt="logo of anime variant"
                className="bi me-2"
                width="80"
                height="80"
                role="img"

                aria-label="Bootstrap" /> Anime Variant
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/anime" className="nav-link px-2 link-secondary">Anime</Link></li>
              <li><Link to="/manga" className="nav-link px-2 link-dark">Manga</Link></li>
              <li>
                <Link reloadDocument to="/discover" className="nav-link px-2 link-dark" onClick={handleSubmit(getNFTs)}>Discover</Link>
              </li>
            </ul>

            <div className="dropdown text-end">
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small">
                <li >
                  <Link className="dropdown-item" to="/minter" onClick={handleSubmit(getNFTs)}>Create NFT...</Link>
                </li>
                <li >
                  <Link reloadDocument className="dropdown-item" to="/collection" onClick={handleSubmit(getNFTs)}>My NFTs</Link>
                </li>
                <li><a className="dropdown-item" href="https://5ilw3-6iaaa-aaaak-acxbq-cai.ic0.app/">Wallet</a></li>
                <li><a onClick={handleSubmit(getNFTs)} className="dropdown-item" href="/profile">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={handleSubmit(logout)}>Sign out</a></li>
              </ul>
            </div>

          </div>
        </div> 

      </header>
      <Body listingGallery={listingGallery} useOwnedGallery={useOwnedGallery} currentPrincipalID={props.userPrincipal} />
    </BrowserRouter >
  );
}

export default Header;