import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Principal } from "@dfinity/principal";

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

      <div className="row g-5">
        {items}{props.content}
      </div>
      <h3 className="title" >{props.title}</h3>
    </div>
  );
}

export default Gallery;
