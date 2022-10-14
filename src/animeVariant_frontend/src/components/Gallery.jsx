import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-component';
import Item from "./Item";
import random from "lodash/random";


function Gallery(props) {

  const [items, setItems] = useState();


  function fetchNFTs() {
    if (props.ids != undefined) {
      setItems(
        props.ids.map((NFTId) => (
          <Item id={NFTId} key={NFTId.toText()} role={props.role} />
        ))
      )
    }
  }

  useEffect(() => {
    fetchNFTs();
  }, []);


  return (

    <div className="features-container container-fluid px-4 text-center">
      <div className="container-fluid px-4 py-5" id="custom-cards">
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 dtyle" >

            {items}{props.content}
            <h3 className="title" >{props.title}</h3>
          </div>
      </div>
    </div >

  );
}

export default Gallery;
