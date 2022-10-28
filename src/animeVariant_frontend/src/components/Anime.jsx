import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AnimeMainContent from "./AnimeMainContent";
import "bootstrap/dist/css/bootstrap.min.css";

function Anime() {

    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState("");

    //get the top anime
    const getTopAnime = async () => {
        const temp = await fetch('https://api.jikan.moe/v4/top/anime')
            .then(res => res.json());
        //console.log(temp);

        setTopAnime(temp.data.slice(0, 5));
        setAnimeList(temp.data);
    }
    useEffect(() => {
        getTopAnime();
        //console.log("topAnime");
    }, []);
    //console.log(topAnime);

    //search for anime
    const handleSearch = async (e) => {
        e.preventDefault();

        fetchAnime(search);
    }

    //fetch the anime from the database
    async function fetchAnime(search) {
        const temp = await fetch('https://api.jikan.moe/v4/anime?limit=10&q=' + search + '&order_by=title&sort=asc')
            .then(res => res.json());
        //console.log(temp);

        setAnimeList(temp.data);

    }

    return (
        <div className="App container-fluid">
            <header width="100%">
                <h1>The<strong>Anime</strong>Database</h1>
            </header>

            <div className="row content-wrap">
                
                <Sidebar
                    className="col"
                    topContent={topAnime} />
                <AnimeMainContent
                    className="col"
                    handleSearch={handleSearch}
                    search={search}
                    setSearch={setSearch}
                    animeList={animeList} />
            </div>


        </div>
    );
}

export default Anime;
