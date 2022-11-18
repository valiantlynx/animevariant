import React from "react";

function Button(props) {
  
  return (
    <center>
      <div className="btn btn-dark" >
        <span
          onClick={props.handleClick}
          id="title">
          {props.text}
        </span>
      </div>
    </center>

  )
}

export default Button;