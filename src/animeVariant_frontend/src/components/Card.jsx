import React from "react";

function Card(props) {
  return (

    <div className="col">
      <div className="card card-cover w-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: 'url(' + (props.content.images.webp.image_url) + ')' }} >
      
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.content.title} </h3>

          <ul className="d-flex list-unstyled mt-auto ">

            <li className="me-auto">
              <img src={props.content.images.webp.image_url} alt={props.content.title} width="32" height="32" className="rounded-circle border border-white" />
            </li>

            <li className="d-flex align-items-center me-3">
              <a className=" bi me-2"
                src={props.content.images.webp.image_url}
                width="1em"
                height="1em">
                <i
                  className="fa-brands fa-facebook"
                  width="24"
                  height="24"></i>
              </a>
              <small>Earth</small>
            </li>

            <li className="d-flex align-items-center">
              <a className=" bi me-2"
                href="https://52nbc-syaaa-aaaak-acxcq-cai.ic0.app/"
                width="1em"
                height="1em">
                <i
                  className="fa-brands fa-facebook"
                  width="24"
                  height="24"></i>
              </a>
              <small>3d</small>
            </li>

          </ul>
        </div>
      </div>
    </div>


  );
}

export default Card;

