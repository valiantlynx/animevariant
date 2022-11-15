import React from 'react';

function CategoryCard(props) {
    return (
        <div className="col-lg-2 col-sm-6">
            <div className="item">
                <div className="icon">
                   {props.image}
                </div>
                <h4>{props.name}</h4>
                <div className="icon-button">
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div>
    )
}


export default CategoryCard
