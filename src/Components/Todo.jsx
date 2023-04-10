import React, { useState } from "react";
import ToDoDisplay from "./ToDoDisplay";

const Todo = () => {
  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  //a state variable to toggle the button between add and edit

  //a state variable to store the index value of the todo which is going to update
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    setNewToDo(event.target.value);
  };

  const handleAdd = () => {
    //If input field is empty
    if (newToDo.trim() === "") {
      return;
    }

    //We update the todo when we got a index value inside editIndex state variable
    if (editIndex !== null) {
      //For correctly mapping the original todo with updated todo, first we load the entire original 𝘁𝗼𝗱𝗼𝘀 array
      const ArrayToDos = [...todos];

      //Then after loading the entire todos array, we use editIndex(which contains the index value of original todo) to correctly update the original newToDo
      //Then whatever we write in newToDo state variable it is assigned in place of the original todo means original newToDo is replaced with updated newToDo
      ArrayToDos[editIndex] = newToDo;

      //Since the todo is updated inside the input field now we update it in array where it is displayed
      setTodos(ArrayToDos);
      setEditIndex(null);

      //Add the newToDo inside the array todos
    } else {
      setTodos([...todos, newToDo]);
      setNewToDo("");
    }
    setNewToDo("");
  };

  // Get the index value of the todo to be updated and store it inside the editIndex state variable
  const handleUpdate = (index) => {
    // const ToDo = todos.find((_, i) => i === index); //Get the todo with index
    setEditIndex(index); //setting the index( of the todo to be updated) inside the editIndex state variable
    setNewToDo(todos[index]); //Fill the todo inside the input field using the setter function of newToDo state variable( which is mapped inside the input tag of jsx)
  };

  // Delete the todo
  const handleDelete = (index) => {
    const deleteToDo = todos.filter((_, i) => i !== index);
    setTodos(deleteToDo);
  };

  return (
    <div
      className="card  position-absolute top-10 start-50 translate-middle-x mt-3"
      style={{ width: "18rem" }}
    >
      {/* Bootstrap input form */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control my-3 mx-2"
          placeholder="Enter your todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          //styling of input form ends here
          value={newToDo}
          onChange={handleChange}
        />

        {/* Bootstrap Button */}
        <button
          className="btn btn-outline-secondary m-3"
          type="button"
          id="button-addon2"
          onClick={handleAdd}
        >
          {editIndex === null ? "Add" : "Update"}
        </button>
      </div>

      <ToDoDisplay
        todos={todos}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
      {/* Display all the todos */}
    </div>
  );
};

export default Todo;
