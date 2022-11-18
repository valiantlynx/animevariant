import React from "react";
import NewLetter from "./NewLetter";

function Footer() {
  const year = new Date().getFullYear();

  return (

    <div className="container-fluid">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-light">ANIME</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#/anime" className="nav-link p-0 text-muted">Home - Anime</a></li>
              <li className="nav-item mb-2"><a href="#/anime" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#/anime" className="nav-link p-0 text-muted">Royalties</a></li>
              <li className="nav-item mb-2"><a href="#/anime" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#/anime" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-light">NFT</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#/discover" className="nav-link p-0 text-muted">Home - Nft</a></li>
              <li className="nav-item mb-2"><a href="#/discover" className="nav-link p-0 text-muted">Royalties</a></li>
              <li className="nav-item mb-2"><a href="#/discover" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#/discover" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#/discover" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-light">MANGA</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#/manga" className="nav-link p-0 text-muted">Home - Manga</a></li>
              <li className="nav-item mb-2"><a href="#/manga" className="nav-link p-0 text-muted">Royalties</a></li>
              <li className="nav-item mb-2"><a href="#/manga" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#/manga" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#/manga" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <NewLetter/>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
          <p className="col">&copy; {year} Anime Variant. All rights reserved.</p>
          <ul className="list-unstyled d-flex ">

            <ul class="wrapper row">
            <a className="col" href="https://www.facebook.com/groups/1500104713843797/">
              <li class="icon facebook ">
                <span class="tooltip">Facebook</span>
                <i class="fab fa-facebook-f" ></i>
              </li>
              </a>
              <a className="col" href="https://twitter.com/Valiantlynxz">
              <li class="icon twitter ">
                <span class="tooltip">Twitter</span>
                <i class="fab fa-twitter"></i>
              </li>
              </a>
              <a className="col" href="https://www.reddit.com/user/animevariant">
              <li class="icon reddit ">
                <span class="tooltip">Reddit</span>
                <i class="fab fa-reddit"></i>
              </li>
              </a>
              <a className="col" href="https://www.facebook.com/groups/1500104713843797/">
              <li class="icon instagram ">
                <span class="tooltip">Github</span>
                <i class="fab fa-instagram"></i>
              </li>
              </a>
              <a className="col" href="https://discord.gg/nSC6yePmqs">
              <li class="icon discord ">
                <span class="tooltip">Discord</span>
                <i class="fab fa-discord"></i>
              </li>
              </a>
              <a className="col" href="https://github.com/Animevariant">
              <li class="icon github " height="20px">
                <span class="tooltip">Github</span>
                <i class="fab fa-github"></i>
              </li>
              </a>
              <a className="col" href="https://www.youtube.com/channel/UCowp4JkKtviDPKEejXcn1-g">
              <li class="icon youtube " >
                <span class="tooltip">Youtube</span>
                <i class="fab fa-youtube"></i>
              </li>
              </a>
            </ul>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;




