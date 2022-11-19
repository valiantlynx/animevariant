import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.webp";


function Navbar(props) {

    return (

        <nav class="navbar navbar-dark  " style={{ backgroundColor: "#19063F" }}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="logo of anime variant"
                        className="bi me-2"
                        width="80"
                        height="80"
                        role="img"

                        aria-label="Bootstrap" />
                </Link>
                <h5 class="navbar-brand fs-1" >Anime Variant</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end " style={{ backgroundColor: "#19063F" }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-bg-dark" id="offcanvasNavbarLabel">Anime Variant</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/anime">Anime</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/manga">Manga</Link>
                            </li>
                            <li class="nav-item" onClick={props.handleClick}><Link class="nav-link" to="/discover" >Discover</Link></li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/docs">Documentation</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Personal
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li  onClick={props.handleClick1}><Link class="dropdown-item" to="/minter">Create NFTs..</Link></li>
                                    <li onClick={props.handleClick2}><Link class="dropdown-item" to="/collection" >My NFTs</Link></li>

                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="https://5ilw3-6iaaa-aaaak-acxbq-cai.ic0.app/">wallet</a></li>
                                    <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
                                    <li  onClick={props.handleClick3}><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar