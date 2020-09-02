import React, { useState } from "react";

import ToDoLists from "./ToDoLists";
function Todo() {
  const [task, settask] = useState("");

  const [item, setitem] = useState([]);

  // let [key, setkey] = useState([]);

  const handleChange = (event) => {
    settask(event.target.value);
  };

  const submit = () => {
    setitem((olditem) => {
      return [...olditem, task];
    });

    settask("");
  };

  const deleteItem = (id) => {
    setitem((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <form>
        <div className="d-flex bd-highlight">
          <div className="p-2 flex-fill bd-highlight">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend"></div>

              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                value={task}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <div className="button button5">
              <button
                className="btn btn-success btn-lg"
                type="button"
                onClick={submit}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {item.map((item, index) => {
          return (
            <>
              <ToDoLists
                key={index}
                id={index}
                text={item}
                onSelect={deleteItem}
              />
            </>
          );
        })}
      </form>
    </div>
  );
}

export default Todo;
