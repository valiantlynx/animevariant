import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent(props) {
    function content() {
        return(
            props.mangaList.map(content => (
                <AnimeCard 
                    content={content}
                    key={content.mal_id}/>
            ))
        )

    }
    return (
        <main>
            <div className="main-head">
                <form
                    className="search-box"
                    onSubmit={props.handleSearch}>
                    <input
                        type="search"
                        placeholder="Search for an anime..."
                        required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                </form>
            </div>
            <div className="anime-list">
                {content()}
            </div>
        </main>
    );
}

export default MainContent;