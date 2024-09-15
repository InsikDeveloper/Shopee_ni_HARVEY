import React, { useContext, useEffect } from "react";
import { ItemContext } from "../../context/ItemContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useContext(ItemContext);

  useEffect(() => {
    console.log(items[0]);
  });

  return (
    <Link to={"orders"} className="relative cursor-pointer">
      <h1>
        <i className="bi bi-cart3 text-5xl font-extrabold text-white"></i>
      </h1>
      <span className="absolute bottom-0 right-0  font-semibold bg-white/90 rounded-full px-2 ">
        {items.length}
      </span>
    </Link>
  );
};

export default Cart;
