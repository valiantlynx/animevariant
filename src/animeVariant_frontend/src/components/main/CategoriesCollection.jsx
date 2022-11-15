import React from 'react';
import CategoryCard from './CategoryCard';
import blockhain from "../../../assets/images/icon-01.png";
import Digital_Art from "../../../assets/images/icon-02.png";
import Music_Art from "../../../assets/images/icon-03.png";
import Virtual_World from "../../../assets/images/icon-04.png";
import Valuable from "../../../assets/images/icon-05.png";
import Triple_NFT from "../../../assets/images/icon-06.png";


function CategoriesCollection() {

    var blockhain_img = <img src={blockhain} alt="" />
    const blockhain_name = "Blockchain";

    var Digital_Art_img = <img src={Digital_Art} alt="" />
    const Digital_Art_name = "Digital Art";

    var Music_Art_img = <img src={Music_Art} alt="" />
    const Music_Art_name = "Music Art";

    var Virtual_World_img = <img src={Virtual_World} alt="" />
    const Virtual_World_name = "Virtual World";

    var Valuable_img = <img src={Valuable} alt="" />
    const Valuable_name = "Valuable";

    var Triple_NFT_img = <img src={Triple_NFT} alt="" />
    const Triple_NFT_name = "Triple NFT";

    return (
        <div className="col-lg-12">
            <div className="categories">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>Browse Through Our <em>Categories</em> Here.</h2>
                        </div>
                    </div>
                    <CategoryCard name={blockhain_name} image={blockhain_img} />
                    <CategoryCard name={Digital_Art_name} image={Digital_Art_img} />
                    <CategoryCard name={Music_Art_name} image={Music_Art_img} />
                    <CategoryCard name={Virtual_World_name} image={Virtual_World_img} />
                    <CategoryCard name={Valuable_name} image={Valuable_img} />
                    <CategoryCard name={Triple_NFT_name} image={Triple_NFT_img} />

                </div>
            </div>
        </div>

    )
}

export default CategoriesCollection