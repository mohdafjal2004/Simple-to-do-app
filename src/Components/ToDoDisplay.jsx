import React from "react";

const ToDoDisplay = (props) => {
  //Handling the onDelete prop
  const handleDelete = (index) => {
    props.onDelete(index);
  };

  //Handling the onAdd and onUpdate prop
  const handleUpdate = (index) => {
    props.onUpdate(index);
    props.onAdd(index);
  };
  return (
    <div >
      {props.todos.map((item, index) => {
        return (
          <div key={index}>
            <div className="card p-3 m-3">
              <div className="card-body">{item}</div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  onClick={() => handleDelete(index)}
                  type="button"
                  className="btn btn-danger me-3"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(index)}
                  type="button"
                  className="btn btn-primary"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoDisplay;
