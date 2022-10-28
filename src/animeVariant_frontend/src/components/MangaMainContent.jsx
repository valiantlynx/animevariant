import React from "react";
import Card from "./Card";
import Gallery from "./Gallery";

function MainContent(props) {
    function content() {
        return(
            props.mangaList.map(content => (
                <Card 
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
            <div className="anime-list container-fluid" >
                <Gallery content={content()}/>               
            </div>
        </main>
    );
}

export default MainContent;