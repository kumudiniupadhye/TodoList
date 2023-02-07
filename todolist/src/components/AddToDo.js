import React from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

function AddToDo() {
  const [input, setInput] = useState("");

  // Add todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
    console.log("input value:", input);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-500 to-slate-100 p-4">
      <div className="w-full m-auto max-w-[500px] bg-slate-200 rounded-md p-4">
        <form onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            type="text"
            placeholder="Add To-do"
            autoFocus
          />
          <button
            className="add-btn bg-gradient-to-r from-blue-200 to-black text-white uppercase"
            type="button "
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddToDo;
