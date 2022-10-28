import React from "react";

function Card(props) {
  return (

    <article className="anime-card col-xxl-3 col-xl-4 col-lg-6 col-md-5" >
      <a 
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg "
        style={{ backgroundImage: 'url(' + (props.content.images.webp.image_url) + ')' }}
        href={props.content.url}
        target="_blank"
        rel="noreferrer"
      >

        <figure>
          <div
            className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
           >

            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.content.title} </h3>

            <ul className="d-flex list-unstyled mt-auto ">

              <li className="me-auto">
                <img
                  src={props.content.images.webp.image_url}
                  alt={props.content.title}
                  width="32"
                  height="32"
                  className="rounded-circle border border-white" />
              </li>

              <li className="d-flex align-items-center me-3">
                <div className=" bi me-2"
                  href={props.content.images.webp.image_url}
                  width="1em"
                  height="1em">
                  <i
                    className="fa-brands fa-facebook"
                    width="24"
                    height="24"></i>
                </div>
                <small>Earth</small>
              </li>

              <li className="d-flex align-items-center">
                <div className=" bi me-2"
                  href={props.content.images.webp.image_url}
                  width="1em"
                  height="1em">
                  <i
                    className="fa-brands fa-facebook"
                    width="24"
                    height="24"></i>
                </div>
                <small>3d</small>
              </li>

            </ul>
          </div>
        </figure>
      </a>
    </article>


  );
}

export default Card;

