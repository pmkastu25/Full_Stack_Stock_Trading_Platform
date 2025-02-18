import React from "react";

import { Link } from "react-router-dom";
import "./BuyActionWindow.css";

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required &#x20B9;140.65</span>
        <div>
          <Link className="btn btn-blue">Buy</Link>
          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
