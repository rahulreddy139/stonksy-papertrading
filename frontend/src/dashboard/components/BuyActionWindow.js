
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, actionType }) => {

  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);


  const handleOrderClick = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://stonksy-backend.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: actionType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      generalContext.closeBuyWindow();

    } catch (err) {

      console.log(
        err.response?.data || err.message
      );

    }
  };


  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };


  return (
    <div
      className="buy-container"
      id="buy-window"
      draggable="true"
    >

      <div className="regular-order">

        <div className="inputs">

          <fieldset>

            <legend>Qty.</legend>

            <input
              type="number"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
            />

          </fieldset>


          <fieldset>

            <legend>Price</legend>

            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
            />

          </fieldset>

        </div>

      </div>


      <div className="buttons">

        <span>
          Margin required ₹140.65
        </span>


        <div>

          <button
            className={
              actionType === "BUY"
                ? "btn btn-blue"
                : "btn btn-red"
            }
            onClick={handleOrderClick}
          >
            {actionType === "BUY" ? "Buy" : "Sell"}
          </button>


          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;
