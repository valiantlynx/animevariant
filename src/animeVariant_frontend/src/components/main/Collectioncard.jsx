import React from 'react'

function Collectioncard(props) {
    return (
        <div className="item">
            {props.image}
            <div className="down-content">
                <h4>{props.name}</h4>
                <span className="collection">Items In Collection:<br /><strong>{props.quantity}</strong></span>
                <span className="category">Category:<br /><strong>{props.category}</strong></span>
                <div className="main-button">
                    <a href="explore.html">Explore Mutant</a>
                </div>
            </div>
        </div>
    )
}



export default Collectioncard
