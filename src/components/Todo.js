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
        <input type="text" value={task} onChange={handleChange} />
        <button className="btn btn-success" type="button" onClick={submit}>
          +
        </button>
        <br />

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
