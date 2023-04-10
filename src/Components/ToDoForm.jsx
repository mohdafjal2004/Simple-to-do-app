import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDoForm = () => {
  const [newToDo, setNewToDo] = useState("");
  //This is for updating the state of input field

  const handleChange = (event) => {
    setNewToDo(event.target.value);
  };

  const [todo, setToDo] = useState([]);
  //This getter is for storing all the todos that will be sent to child component as a prop
  //only this setter  has authorization to make any chnages inside the array
  //so when passing array as prop and when there is any need of modification inside the array in child component then also this setter can only update the getter
  //so this setter function should be send as prop to child component

  const handleClick = () => {
    if (!newToDo) {
      alert("Please add new todo");
    } else if (newToDo && !toggleSubmit) {
      // condition for updating  the todo in input field
      setNewToDo(
        todo.map((elem, i) => {
          if (i === IseditItem) {
            return [ ...elem, newToDo ];
          }
          return elem;
        })
      );
    } else {
      //
      setToDo([...todo, newToDo]);
      setNewToDo("");
    }
  };

  //state variable for toggling the button between edit and Add
  const [toggleSubmit, settoggleSubmit] = useState(true);

  //state variable for getting index of the todo we selected for updating
  const [IseditItem, setIsEditItem] = useState(null);

  return (
    <div>
      <div>Hello</div>
      <textarea type="text" onChange={handleChange} value={newToDo} />
      {toggleSubmit ? (
        <button onClick={handleClick}>Add</button>
      ) : (
        <button onClick={handleClick}>Update todo</button>
      )}

      <ToDoList
        todo={todo}
        setNewToDo={setNewToDo} //For updating a todo in child in input field
        setToDo={setToDo} //For deleting a todo
        toggleSubmit={toggleSubmit}
        settoggleSubmit={settoggleSubmit}
        setIsEditItem={setIsEditItem}
        onIndex={handleClick}
      />
    </div>
  );
};

export default ToDoForm;
