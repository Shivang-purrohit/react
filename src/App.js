import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setlikecounter] = useState(0);

  function likeClickHandler() {
    var newlikeCounter = likeCounter + 1;
    setlikecounter(newlikeCounter);
  }

  return (
    <div className="App">
      <h1>WELCOME</h1>
      <button onClick={likeClickHandler}> Like!</button>
      {likeCounter}
    </div>
  );
}
