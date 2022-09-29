import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MangaMainContent from "./MangaMainContent";
import "bootstrap/dist/css/bootstrap.min.css";

function Manga() {

    const [mangaList, setMangaList] = useState([]);
    const [topManga, setTopManga] = useState([]);
    const [search, setSearch] = useState("");

    //get the top manga
    const getTopManga = async () => {
        const temp = await fetch('https://api.jikan.moe/v4/top/manga')
        .then(res => res.json());
        //console.log(temp);

        setTopManga(temp.data.slice(0, 5));
        setMangaList(temp.data);
    }
    useEffect(() => {
        getTopManga();
        
        //console.log("topManga");
    }, []);
    //console.log(topManga);

    //search for anime
    const handleSearch = async (e) => {
        e.preventDefault();

        fetchAnime(search);
    }

    //fetch the anime from the database
    async function fetchAnime(search) {
        const temp = await fetch('https://api.jikan.moe/v4/manga?limit=10&q=' + search +'&order_by=title&sort=asc')
        .then(res => res.json());
        console.log(temp);

        setMangaList(temp.data);

    }

    return (
        <div className="App">
            <div className="content-wrap">
                <Sidebar
                    topContent={topManga} />
                <MangaMainContent 
                    handleSearch={handleSearch} 
                    search={search}
                    setSearch={setSearch}
                    mangaList={mangaList}/>
            </div>


        </div>
    );
}

export default Manga;