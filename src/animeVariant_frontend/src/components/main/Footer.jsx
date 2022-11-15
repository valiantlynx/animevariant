import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (

    <div className="">
      <footer className="container-fluid py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>MANGA</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p> Home - Anime</p></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Features</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Royalties</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>FAQs</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>About</p> </a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>NFT</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Home - Nft</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Royalties</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Pricing</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>FAQs</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>About</p> </a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>ANIME</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p> Home - Manga</p></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Royalties</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>Pricing</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>FAQs</p> </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><p>About</p> </a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; {year} Anime Variant, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"> <a className="social_icon" href="https://www.youtube.com/channel/UCowp4JkKtviDPKEejXcn1-g"><i className="fa-brands fa-twitter" width="24" height="24"></i></a></li>
            <li className="ms-3"> <a className="social_icon" href="https://www.youtube.com/channel/UCowp4JkKtviDPKEejXcn1-g"><i className="fa-brands fa-instagram" width="24" height="24"></i></a></li>
            <li className="ms-3"> <a className="social_icon" href="https://www.youtube.com/channel/UCowp4JkKtviDPKEejXcn1-g"><i className="fa-brands fa-facebook" width="24" height="24"></i></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
