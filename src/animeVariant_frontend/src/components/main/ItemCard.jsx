import React from "react";

function ItemCard(props) {


  return (
    <div className="TabCardGrid__CardContainer-d3lyjf-5 gqUtIa col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 disGrid-item"  ><a
    
      className="TabCardGrid__Card-d3lyjf-6 hlKGSk group disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded" href="#">
      <div className="TabCardGrid__CardImageContainer-d3lyjf-7 hWAzPc disCardMedia-root  disCardMedia-media disCardMedia-img w-200" style={{backgroundImage: `url(${props.image})`}}>
        <div className="TabCardGrid__CardRatingContainer-d3lyjf-8 iunjfO">
          <div className="TabCardGrid__CardRating-d3lyjf-9 eBQINA"><svg
            viewBox="0 0 1792 1792">
            <path
              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
            </path>
          </svg>5.0</div>
          <div className="TabCardGrid__CardReview-d3lyjf-12 dLUanr">(87)</div>
        </div>
        <div className="TabCardGrid__CardHoverOverlay-d3lyjf-10 kdxPDl"
          style={{opacity: 0, height: "0px"}}><button
            className="sc-himrzO TabCardGrid__CardButton-d3lyjf-11 bcAyiC eZguLr">Buy
            Now</button></div>
      </div>
      <div className="TabCardGrid__CardText-d3lyjf-13 fiGYLW">
        <h5 className="TabCardGrid__CardTitle-d3lyjf-14 jNOsuF">{props.name}</h5>
        <p className="TabCardGrid__CardContent-d3lyjf-15 eDEXrt">{props.owner}</p>
        <p className="TabCardGrid__CardPrice-d3lyjf-16 dKLdpq">{props.priceLabel}</p>
      </div>
    </a></div>
  );
}

export default ItemCard;
