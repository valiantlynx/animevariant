import React from 'react'
import CurrentMarketCard from './CurrentMarketCard'

function CurrentMarket() {
    return (
        <div className="currently-market">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2><em>Items</em> Currently In The Market.</h2>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="filters">
                            <ul>
                                <li data-filter="*" className="active">All Items</li>
                                <li data-filter=".msc">Music Art</li>
                                <li data-filter=".dig">Digital Art</li>
                                <li data-filter=".blc">Blockchain</li>
                                <li data-filter=".vtr">Virtual</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12">

                        <div className="row ">
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentMarket