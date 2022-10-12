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
            <div className="">
                <form
                    className=""
                    onSubmit={props.handleSearch}>
                    <input
                        type=""
                        placeholder="Search for an anime..."
                        required
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                </form>
            </div>
            <div >
                <Gallery content={content()}/>               
            </div>
        </main>
    );
}

export default MainContent;