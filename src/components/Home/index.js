import React from "react";
import Card from "../CardInfo";
import Search from "../Search";

const Home = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Card />
      <Search />
    </div>
  );
};

export default Home;