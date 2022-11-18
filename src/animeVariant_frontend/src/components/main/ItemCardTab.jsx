import React from 'react'
import ItemCard from './ItemCard'

function ItemCardTab(props) {
    return (
        <div className="TabCardGrid__TabContent-d3lyjf-4 RDzvQ "
            style={{opacity: 1, display: "flex", transform: "none"}}>
                <ItemCard  image={props.image}/>
        </div>
    )
}

export default ItemCardTab