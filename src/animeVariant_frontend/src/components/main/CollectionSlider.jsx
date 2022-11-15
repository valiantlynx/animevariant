import React from 'react'
import Collectioncard from './Collectioncard'
import Yacht_Club from "../../../assets/images/collection-01.jpg";
import Kennel_Club from "../../../assets/images/collection-01.jpg";
import Genesis from "../../../assets/images/collection-01.jpg";
import Worldwide from "../../../assets/images/collection-01.jpg";


function CollectionSlider(props) {
    var Yacht_Club_img = <img src={Yacht_Club} alt="" />
    const Yacht_Club_name = "Mutant Bored Ape Yacht Club";
    const Yacht_Club_quantity = "310/340"
    const Yacht_Club_category = "Digital Crypto"

    var Kennel_Club_img = <img src={Kennel_Club} alt="" />
    const Kennel_Club_name = "Bored Ape Kennel Club";
    const Kennel_Club_quantity = "324/324"
    const Kennel_Club_category = "Visual Art"

    var Genesis_img = <img src={Genesis} alt="" />
    const Genesis_name = "Genesis Collective Statue";
    const Genesis_quantity = "380/394"
    const Genesis_category = "Music Art"

    var Worldwide_img = <img src={Worldwide} alt="" />
    const Worldwide_name = "Worldwide Artwork Ground";
    const Worldwide_quantity = "426/468"
    const Worldwide_category = "Blockchain"

    return (

        <div className="col-lg-12">
            <div className="collections">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>Explore Some Hot <em>Collections</em> In Market.</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="owl-collection owl-carousel">

                            <Collectioncard name={Yacht_Club_name} image={Yacht_Club_img} quantity={Yacht_Club_quantity} category={Yacht_Club_category} />
                            <Collectioncard name={Kennel_Club_name} image={Kennel_Club_img} quantity={Kennel_Club_quantity} category={Genesis_category} />
                            <Collectioncard name={Genesis_name} image={Genesis_img} quantity={Genesis_quantity} category={Kennel_Club_category} />
                            <Collectioncard name={Worldwide_name} image={Worldwide_img} quantity={Worldwide_quantity} category={Worldwide_category} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default CollectionSlider
