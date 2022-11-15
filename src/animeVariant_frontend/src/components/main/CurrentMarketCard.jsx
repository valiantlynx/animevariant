import React from 'react'

function CurrentMarketCard() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    const newdate = year + "/" + month + "/" + day;

    return (
        <div className="col-lg-6 currently-market-item all msc">
            <div className="item">
                <div className="left-image">
                    <img src="assets/images/market-01.jpg" alt="" style="border-radius: 20px; min-width: 195px;" />
                </div>
                <div className="right-content">
                    <h4>Music Art Super Item</h4>
                    <span className="author">
                        <img src="assets/images/author.jpg" alt="" style="max-width: 50px; border-radius: 50%;" />
                        <h6>Liberty Artist<br /><a href="#">@libertyart</a></h6>
                    </span>
                    <div className="line-dec"></div>
                    <span className="bid">
                        Current Bid<br /><strong>2.03 ETH</strong><br /><em>($8,240.50)</em>
                    </span>
                    <span className="ends">
                        Ends In<br /><strong>4D 08H 15M 42S</strong><br /><em>(July 24th, 2022)</em>
                    </span>
                    <div className="text-button">
                        <a href="details.html">View Item Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentMarketCard