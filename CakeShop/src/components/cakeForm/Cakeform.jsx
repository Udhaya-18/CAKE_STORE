import React, { useState } from "react";
import "./Cakeform.css"
function Cakeform() {
//   const [headingText, setHeadingText] = useState("Add Products");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setHeadingText("Added");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Add Cake</h1>
      <form>
        <input type="text" placeholder="Cake Name" />
        <input type="text" placeholder="Flavor" />
        <input type="text" placeholder="Weight in units" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Image" />
        <button
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Add Cake
        </button>
      </form>
    </div>
  );
}

export default Cakeform;