import React from 'react'
import ThreeBigFeaturesSimpleCard from './ThreeBigFeaturesSimpleCard'
import image from "../../../assets/img/unsplash_image.webp";
import image2 from "../../../assets/img/unsplash_image.webp";
import image1 from "../../../assets/img/reactD.webp";

export default function ThreeBigFeatures() {
    const priceLeft = "partial"
    const titleLeft = "Own Your Art"
    const descriptionLeft = "AnimeVariant offers everyone the opportunity to truly own the art they wish. Creators can mint their work as non fungible tokens and sell it to the whole world. In the web AnimeVariant offers all user the opportunity to buy the works they like and sell if they wish. A trading place for all art."
    const linkLeft = "https://github.com/Animevariant"

    const priceRight = "Online"
    const titleRight = "Read manga"
    const descriptionRight = "Enjoy art and manga from all our creators. All the while having the ability to buy the right to the revenue if you like"
    const linkRight = "/manga"


    const priceLeft1 = "Online"
    const titleLeft1 = "Watch anime"
    const descriptionLeft1 = "Enjoy anime and animasjon from all our creators. All the while having the ability to buy the right to the revenue if you like"
    const linkLeft1 = "/anime"

    const priceRight1 = "Online"
    const titleRight1 = "Realiable"
    const descriptionRight1 = "AnimeVariant is Decentralised app Written in React and motoko. first u get geat authenticated by react. there after the request your computer sends must be the same as all the million of nodes around the world."
    const linkRight1 = "https://github.com/Animevariant"
    return (
        <div className="sc-bczRLJ dAAbkH App">
            <div className="sc-hKMtZM cdoWjg">
                <div className="sc-eCYdqJ oIKac">
                    <div className="sc-jSMfEi gqLkbA">
                        <h2 className="sc-gsnTZi dXcUyO text-light">Not Convinced?</h2>
                        <p className="sc-gKXOVf etnyrT">Here are some of the functions our company offers</p>
                    </div>
                    <div className="sc-iBkjds enHikj">
                        <ThreeBigFeaturesSimpleCard
                            priceLeft={priceLeft}
                            titleLeft={titleLeft}
                            descriptionLeft={descriptionLeft}
                            linkLeft={linkLeft}
                            imageLeft={image2}

                            priceRight={priceRight}
                            titleRight={titleRight}
                            descriptionRight={descriptionRight}
                            linkRight={linkRight} 
                            imageRight={image}/>
                        <ThreeBigFeaturesSimpleCard
                            priceLeft={priceLeft1}
                            titleLeft={titleLeft1}
                            descriptionLeft={descriptionLeft1}
                            linkLeft={linkLeft1}
                            imageLeft={image2}
                            

                            priceRight={priceRight1}
                            titleRight={titleRight1}
                            descriptionRight={descriptionRight1}
                            linkRight={linkRight1}
                            imageRight={image1}
                             />
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
