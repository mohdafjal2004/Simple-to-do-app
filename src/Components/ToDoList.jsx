import React, { useState } from "react";

const ToDoList = (props) => {
  console.log(props);
  const handleDeleteTodo = (index) => {
    const deleteToDo = props.todo.filter((_, i) => i !== index);
    props.setToDo(deleteToDo);
  };

  // const handleUpdateTodo = (index, newTitle) => {
  //   const FullArray = [...props.todo];
  //   FullArray[index] = newTitle;
  //   props.setToDo(FullArray);
  // };
  const handleUpdateTodo = (index) => {
    //Getting the todo to be updated using its index value
    let newEditToDo = props.todo.find((_, i) => {
      return i === index;
    });

    // After getting the todo we toggle the button from add to edit mode
    props.settoggleSubmit(false);

    //After getting the todo we fill the todo in input field with our new updated todo
    props.setNewToDo(newEditToDo);

    //After the filling the value in input field,
    // now we get the index value of the original todo which we are updating
    props.setIsEditItem(index);

    //For passing the index value of the todo being updated to the parent component for updating the index
    props.onIndex(index);
  };

  return (
    <div>
      ToDos:
      {props.todo.map((data, index) => {
        return (
          <h1 key={index}>
            <p>{data}</p>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleUpdateTodo(index)}>Update</button>
          </h1>
        );
      })}
    </div>
  );
};

export default ToDoList;
