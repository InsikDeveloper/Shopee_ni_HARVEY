import React from "react";
import HeaderLogo from "./HeaderLogo";
import Cart from "./Cart";

const HeaderLayout = () => {
  return (
    <header className="flex justify-between items-center px-10 bg-green-700 w-full h-16 ">
      <HeaderLogo />
      <Cart />
    </header>
  );
};

export default HeaderLayout;
