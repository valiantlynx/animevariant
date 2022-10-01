import React from "react";

function Button(props) {
    return(
        <div className="btn btn-dark">
            <span
              onClick={props.handleClick}
              id="title">
              {props.text}
            </span>
            </div>
    )
}

export default Button;