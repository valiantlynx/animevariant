import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-component';
import Item from "./Item";
import random from "lodash/random";


function Gallery(props) {

  const [items, setItems] = useState();
  const [loaderHidden, setLoaderHidden] = useState(true);


  function fetchNFTs() {
    setLoaderHidden(false);
    if (props.ids != undefined) {
      setItems(
        props.ids.map((NFTId) => (
          <Item id={NFTId} key={NFTId.toText()} role={props.role} />
        ))
      )
    }
    setLoaderHidden(true);
  }

  useEffect(() => {
    fetchNFTs();
  }, []);


  return (
    <div>
      <div hidden={loaderHidden} className=" lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="features-container container-fluid px-4 text-center">

        <div className="container-fluid px-4 py-5" id="custom-cards">
          <h3 ></h3>
          <header>
            <h1><strong>{props.title}</strong></h1>
          </header>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 dtyle" >

            {items}{props.content}

          </div>
        </div>
      </div >
    </div>


  );
}

export default Gallery;
