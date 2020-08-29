import React, { useState } from "react";

function Todo() {
  const [task, settask] = useState("");

  const [item, setitem] = useState([]);

  const handleChange = (event) => {
    settask(event.target.value);
  };

  const submit = () => {
    setitem((olditem) => {
      return [...olditem, task];
    });
  };
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={submit}>
          +
        </button>
        <br />

        {item.map((itemval) => {
          return (
            <>
              {itemval} <br />
            </>
          );
        })}
      </form>
    </div>
  );
}

export default Todo;
