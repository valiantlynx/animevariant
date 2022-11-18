import React from 'react'
import ItemCardTab from './ItemCardTab'

function TabGrid(props) {
    return (
        <div className="sc-bczRLJ dAAbkH App">
            <div className="sc-ezWOiH bjsweb">
                <div className="sc-bZkfAO dMJxBT">
                    <div className="TabCardGrid__HeaderRow-d3lyjf-0 ewWSAw">
                        <h2 className="sc-gsnTZi TabCardGrid__Header-d3lyjf-1 dXcUyO">Checkout the Menu</h2>
                        <div className="TabCardGrid__TabsControl-d3lyjf-2 cxIBRd">
                            <div className="TabCardGrid__TabControl-d3lyjf-3 jXaRsz">Starters</div>
                            <div className="TabCardGrid__TabControl-d3lyjf-3 hRTWOb">Main</div>
                            <div className="TabCardGrid__TabControl-d3lyjf-3 hRTWOb">Soup</div>
                            <div className="TabCardGrid__TabControl-d3lyjf-3 hRTWOb">Desserts</div>
                        </div>
                    </div>
                    <ItemCardTab image={props.image} />
                </div><svg viewBox="0 0 600 600" className="TabCardGrid__DecoratorBlob1-d3lyjf-17 bxaVOd">
                    <g transform="translate(300,300)">
                        <path
                            d="M86.4,-125.7C108.9,-102.5,122,-73.2,149.6,-37.1C177.2,-0.9,219.4,42,223.6,86.1C227.8,130.3,194.2,175.6,150.6,200.7C107,225.9,53.5,231,5.2,223.8C-43.1,216.7,-86.2,197.3,-109.5,165.6C-132.8,133.8,-136.3,89.6,-138.8,52.1C-141.4,14.6,-143,-16.2,-147,-61.4C-151,-106.6,-157.5,-166.1,-133.4,-188.8C-109.3,-211.5,-54.7,-197.2,-11.4,-181.6C31.9,-166,63.9,-148.9,86.4,-125.7Z"
                            fill="currentColor"></path>
                    </g>
                </svg><svg viewBox="0 0 600 600" className="TabCardGrid__DecoratorBlob2-d3lyjf-18 btXnYx">
                    <g transform="translate(300,300)">
                        <path
                            d="M103.9,-95.2C140.4,-67.4,179.7,-33.7,191.6,11.9C203.5,57.5,188,115,151.5,150.2C115,185.4,57.5,198.2,-5.4,203.6C-68.4,209,-136.7,207,-183.4,171.9C-230,136.7,-255,68.4,-233.5,21.6C-211.9,-25.2,-143.8,-50.4,-97.1,-78.3C-50.4,-106.1,-25.2,-136.6,4.2,-140.8C33.7,-145,67.4,-123.1,103.9,-95.2Z"
                            fill="currentColor"></path>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default TabGrid