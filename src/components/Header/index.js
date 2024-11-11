import React from "react";
import Generations from "./Generations";
import Logo from "../Home/CardInfo/Logo";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Generations />
      <Logo />
    </div>
  );
};

export default Header;