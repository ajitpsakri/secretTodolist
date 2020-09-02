import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
        {props.text}
      </div>
    </>
  );
};

export default ToDoLists;
