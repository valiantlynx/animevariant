import React from 'react'

function ThreeBigFeaturesSimpleCard(props) {
    return (

        <div>
            <div className="sc-ftvSup PcoOL">
                <div className="sc-papXJ dUcQDW" style={{backgroundImage: `url(${props.imageLeft})`}}></div>
                <div className="sc-jqUVSM gWvgHV">
                    <div className="sc-kDDrLX eLLBrt">{props.priceLeft}</div>
                    <h4 className="sc-iqcoie ifMglo">{props.titleLeft}</h4>
                    <p className="sc-crXcEl kNiTnK">{props.descriptionLeft}
                    </p><a href={props.linkLeft} className="sc-evZas caGnFj">Continue</a>
                </div>
            </div>
            <div reversed="" className="sc-ftvSup VVXku">
                <div className="sc-papXJ ggBHCr" style={{backgroundImage: `url(${props.imageRight})`}}></div>
                <div className="sc-jqUVSM gWvgHV">
                    <div className="sc-kDDrLX eLLBrt">{props.priceRight}</div>
                    <h4 className="sc-iqcoie ifMglo">{props.titleRight}</h4>
                    <p className="sc-crXcEl kNiTnK">{props.descriptionRight}</p><a href={props.linkRight} className="sc-evZas caGnFj">Continue</a>
                </div>
            </div>
        </div>
    )
}

export default ThreeBigFeaturesSimpleCard