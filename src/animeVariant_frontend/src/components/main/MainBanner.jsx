import React from 'react';
import banner1 from "../../../assets/images/banner-01.png";
import banner2 from "../../../assets/images/banner-01.png";

function MainBanner() {
  return (
    <div className="main-banner">
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-lg-6 align-self-center">
          <div className="header-text">
            <h6>Anime and Manga Marketplace</h6>
            <h2>Create, Sell &amp; Collect Top Anime and Manga.</h2>
            <p>Anime Vatiant is a really cool and professional design for your anime and manga. Here You can buy and sell both personal Artworks and your favourite Anime and Manga</p>
            <div className="buttons">
              <div className="border-button">
                <a href="/discover">Explore Top Art</a>
              </div>
              <div className="main-button">
                <a href="/docs" target="_blank">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <div className="owl-banner owl-carousel">
            <div className="item">
              <img src="../../../assets/images/banner-01.png" alt=""/>
            </div>
            <div className="item">
              <img src={banner2} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainBanner;