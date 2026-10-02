import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios
      .get("https://stonksy-backend.onrender.com/allOrders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });

  }, []);


  return (
    <>

      {allOrders.length === 0 ? (

        <div className="orders">

          <div className="no-orders">

            <p>You haven't placed any orders yet</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>

          </div>

        </div>

      ) : (

        <div className="orders">

          <h3 className="title">
            Orders ({allOrders.length})
          </h3>

          <div className="order-table">

            <table>

              <thead>

                <tr>
                  <th>Stock</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>

              </thead>

              <tbody>

                {allOrders.map((order, index) => (

                  <tr key={index}>

                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>₹{Number(order.price).toFixed(2)}</td>

                    <td>{order.mode}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </>
  );
};

export default Orders;
