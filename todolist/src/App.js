import { query, onSnapshot, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import "./firebase";
import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
// import AddToDo from "./components/AddToDo";

function App() {
  const [toDos, settoDos] = useState([]);
  const [input, setInput] = useState("");

  // Add todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      //todos is a database
      text: input,
      completed: false,
    });
    setInput(""); //clear the input field
    console.log("input value:", input);
  };

  //Toggle(if completed) Todo
  const ifCompleted = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  //Delete Todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  //Read Todo
  useEffect(() => {
    const q = query(collection(db, "todos"));

    const data = onSnapshot(q, (querySnapshot) => {
      let toDoArray = [];
      querySnapshot.forEach((doc) => {
        toDoArray.push({ ...doc.data(), id: doc.id });
      });
      settoDos(toDoArray);

      // console.log("array", toDoArray);
    });

    return () => data();
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300 p-3">
      <div className="w-full m-auto max-w-[500px] bg-slate-100 rounded-md p-4 shadow-xl">
        <h1 className="text-4xl text-center p-2 text-gray-700 font-bold">
          ToDo App
        </h1>
        <form className="flex justify-between mt-4" onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 w-full text-xl rounded "
            type="text"
            placeholder="Add To-do"
            autoFocus
          />
          <button
            className="bg-gradient-to-r from-blue-200 to-black text-white border rounded p-4 ml-2 uppercase"
            type="button "
          >
            Add
          </button>
        </form>
        <ul>
          {toDos.map((item, index) => (
            <Todo
              key={index}
              todo={item}
              deleteTodo={deleteTodo}
              ifCompleted={ifCompleted}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
