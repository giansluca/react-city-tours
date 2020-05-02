import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import "./App.scss";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <TourList></TourList>
    </main>
  );
}

export default App;
