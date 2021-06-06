import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return (
    <div className="card__order" {...props}>
       <nav aria-label="breadcrumb">
          <ol className="breadcrumb cardHeader__breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item">Library</li>
            <li className="breadcrumb-item" aria-current="page">Order manager</li>
            <li className="breadcrumb-item active" aria-current="page">Order details</li>
          </ol>
      </nav>
      {(props.headerLeft || props.headerRight) && (
        <div className="cardHeader">
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;
