import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import Anime from "./Anime";
import { animeVariant_backend } from "../../../declarations/animeVariant_backend";
import { AuthClient } from '@dfinity/auth-client';
import Manga from "./Manga";
import LandingPage from "./LandingPage";


function Header() {

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

    <HashRouter>


      <div className=""  >

        <header className="" >
        <section class="colored_section" id="title">
          <nav className="navbar sticky-bottom navbar-expand-md bg-light"  >
            <div className="container-fluid">
              <Link className="navbar-brand company_name" to="/">
                <img  src={logo} alt="logo of anime variant" width="30" height="30" className="d-inline-block align-text-top"/> animeVariant
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">

                    <Link className="nav-link active" aria-current="page" to="/anime">Anime</Link>
                  </li>
                  <li className="nav-item">

                    <Link className="nav-link" to="/manga">Manga</Link>
                  </li>
                  <li className="nav-item">

                    <Link className="nav-link" to="/discover">Discover</Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Member Options
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/minter">Create NFT</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <Link className="dropdown-item" to="/collection">My NFTs</Link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </section>

        </header>
      </div>

      <Routes >
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/discover" element={listingGallery} />
        <Route path="/minter" element={<Minter />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/collection" element={useOwnedGallery} />
      </Routes>

    </HashRouter>
  );
}

export default Header;
