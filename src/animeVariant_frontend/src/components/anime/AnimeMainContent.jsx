import React from "react";
import Card from "../main/Card";
import Gallery from "../main/Gallery";

function MainContent(props) {
    function content() {
        return (
            props.animeList.map(content => (
                <Card
                    content={content}
                    key={content.mal_id} />
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
            <div className="anime-list" >
                <Gallery content={content()}/>               
            </div>
        </main>
    );
}

export default MainContent;