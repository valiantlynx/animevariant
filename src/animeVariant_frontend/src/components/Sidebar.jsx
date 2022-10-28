import React from "react";
function Sidebar(props) {

    //console.log(props.topContent);

    function content() {
        return (
            props.topContent.map(content => (
                <a href={content.url}
                    target="_blank"
                    rel="noRefferer"
                    key={content.mal_id}
                >{content.title}</a>
            ))
        )

    }

    return (
        <aside className="container-fluid">
            
            <nav>
                <center>
                    <h3>Top Content</h3>
                </center>

                {content()}
            </nav>
        </aside>
    );
}

export default Sidebar;