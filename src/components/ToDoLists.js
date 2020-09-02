import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div className="text-white">
          <h3>{props.text}</h3>
        </div>

        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
      </div>
    </>
  );
};

export default ToDoLists;
