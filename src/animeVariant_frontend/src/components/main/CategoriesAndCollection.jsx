import React from 'react'
import CategoriesCollection from "./CategoriesCollection";
import CollectionSlider from "./CollectionSlider";

function CategoriesAndCollection() {
    return (

        <div className="categories-collections">
            <div className="container-fluid">
                <div className="row">
                    <CategoriesCollection />
                    <CollectionSlider />
                </div>
            </div>
        </div>
    )
}

export default CategoriesAndCollection