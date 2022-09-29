import React from "react";


function AnimeCard(props) {
  return (
    <article className="anime-card">
        <a 

            href={props.content.url} 

            className="anime-card-a-tag" 
            target="_blank" 
            rel="norefferer">
            <figure>

                <img src={props.content.images.webp.image_url} alt={props.content.title} />
            </figure>
            <h3>{props.content.title}</h3>

        </a>

    </article>
  );
}

export default AnimeCard;

