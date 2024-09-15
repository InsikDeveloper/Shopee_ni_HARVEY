import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContextProvider";
import { Link } from "react-router-dom";

const Orders = () => {
  const { items } = useContext(ItemContext);
  return (
    <div>
      <Link to={"/"}>
        <i className="bi bi-arrow-left text-2xl"></i>
      </Link>
      <h1 className="text-3xl font-semibold text-center">Your Orders</h1>
      <ul>
        {items.length - 1 > 0 &&
          items.map((item) => (
            <li key={item.name}>
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-4">
                  <p>P{item.price}</p>
                  <span className="text-sm font-bold">x</span>
                  <p>{item.quantity}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Orders;
