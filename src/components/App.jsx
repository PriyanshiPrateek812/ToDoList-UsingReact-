import React, { useState } from "react";

function App() {
  const [item, setItems] = useState("");
  const [list, setList] = useState([]);
  function handleChange(event) {
    const newItem = event.target.value;
    setItems(newItem);
  }
  function handleClick() {
    setList((prevList) => {
      return [...prevList, item];
    });
    setItems("");
  }
  function addToArray() {}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="item" value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
