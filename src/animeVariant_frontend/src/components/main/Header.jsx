import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/images/logo.png";
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
      <header className="header-area header-sticky">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">

                <a href="index.html" className="logo">

                  <Link
                    to="/"
                    style={{ paddingRight: "20%" }}
                    classNameName="navbar-brand company_name d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img src={logo} aria-label="Bootstrap" role="img" alt="logo of anime variant" />

                  </Link>


                </a>

                <ul className="nav">
                  <li><a href="#" className="active">Home</a></li>
                  <li>
                    <Link reloadDocument to="/discover" classNameName="nav-link px-2 link-dark" onClick={handleSubmit(getNFTs)}>Explore</Link>
                  </li>
                  <li>
                    <Link to="/manga" classNameName="nav-link px-2 link-dark">Manga</Link>
                  </li>
                  <li><a href="details.html">Item Details</a></li>
                  <li><a href="author.html">Author</a></li>
                  <li><a classNameName="dropdown-item" href="https://5ilw3-6iaaa-aaaak-acxbq-cai.ic0.app/">Wallet</a></li>
                  <li><a onClick={handleSubmit(getNFTs)} classNameName="dropdown-item" href="/profile">Profile</a></li>
                  <li >
                    <Link reloadDocument classNameName="dropdown-item" to="/collection" onClick={handleSubmit(getNFTs)}>My NFTs</Link>
                  </li>
                  <li >
                    <Link classNameName="dropdown-item" to="/minter" onClick={handleSubmit(getNFTs)}>Create Yours</Link>
                  </li>
                  <li><a classNameName="dropdown-item" href="#" onClick={handleSubmit(logout)}>Sign out</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>

              </nav>
            </div>
          </div>
        </div>
      </header>

      <Body listingGallery={listingGallery} useOwnedGallery={useOwnedGallery} currentPrincipalID={props.userPrincipal} />
    </BrowserRouter >
  );
}

export default Header;
