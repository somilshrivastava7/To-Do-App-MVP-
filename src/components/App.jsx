import React from "react";
import { useState } from "react";

function App() {
  const [list, updateList] = useState([]);
  const [currItem, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    updateList((prevList) => [...prevList, currItem]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          value={currItem}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;