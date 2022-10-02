import React from "react";


function AnimeCard(props) {
  return (
    <div className="content_box col">
      <div className="p-3 ">
        <a
        id="title"
          href={props.content.url}
          rel="external">
          <figure>
            <img width="200px" height="aut0" src={props.content.images.webp.image_url} alt={props.content.title} />
          </figure>
          <h3 className="title" >{props.content.title}</h3>

        </a>
      </div>


    </div>
  );
}

export default AnimeCard;

