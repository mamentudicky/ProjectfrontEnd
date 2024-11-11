import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header title="Ini adalah Header" />
      <Home title="Ini adalah home" />
      <Footer title="Ini adalah Footer" />
    </div>
  );
};

export default App;