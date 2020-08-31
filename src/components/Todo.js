import React, { useState } from "react";

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

    // setkey((assignKey) => {
    //   key = Math.random();
    //   return [...assignKey, key];
    // });
    // task.id = key;

    //console.log(item.id);
  };

  const del = () => {
    setitem(() => {
      return item.splice(0, 0);
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

        {item.map((item) => {
          return (
            <>
              {item}
              <button type="button" onClick={del}>
                X
              </button>
              <br />
            </>
          );
        })}
      </form>
    </div>
  );
}

export default Todo;
