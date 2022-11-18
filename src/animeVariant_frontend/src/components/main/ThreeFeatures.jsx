import React from 'react'
import logo from "../../../assets/img/logo.webp";
import ThreeFeaturesSimpleCard from "./ThreeFeaturesSimpleCard"


function ThreeFeatures() {

const link = "https://github.com/Animevariant";
const link1 = "https://github.com/Animevariant";
const link2 = "https://github.com/Animevariant";

const title = "Binge";
const title1 = "Earn";
const title2 = "Private";

const description = "Watch Anime and read Manga online.";
const description1 = "Earn money by reading and watching anime.";
const description2 = "We never ask for personal infomation";




    return (
    <div className="sc-bczRLJ  App">
            <div className="sc-ezWOiH bjsweb">
                <div className="sc-bZkfAO dMJxBT">
                    <div className="ThreeColSimple__ThreeColumnContainer-jpeq8t-3 UDUoR">
                        <ThreeFeaturesSimpleCard image={logo} link={link} title={title} description={description}/>
                        <ThreeFeaturesSimpleCard image={logo} link={link1} title={title1} description={description1}/>
                        <ThreeFeaturesSimpleCard image={logo} link={link2} title={title2} description={description2}/>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ThreeFeatures