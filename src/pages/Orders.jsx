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
      <h1 className="text-3xl font-semibold text-center mb-5">Your Orders</h1>
      <ul>
        {items.length > 0 &&
          items.map((item, index) => (
            <li key={item.name}>
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-4">
                  <p>P{item.price}</p>
                  <span className="text-sm font-bold">x</span>
                  <p>{item.quantity}</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    to={`edit/${index}`}
                    className="font-sm font-semibold px-2 py-1 rounded-sm border-green-600 border-[1px] border-solid hover:bg-green-600 hover:text-white duration-100 "
                  >
                    Edit
                  </Link>
                  <button className="font-sm font-semibold  px-2 py-1 rounded-sm border-red-600 border-[1px] border-solid hover:bg-red-600 hover:text-white duration-100  ">
                    Del
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Orders;
