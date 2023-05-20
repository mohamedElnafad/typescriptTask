import React, { useState } from "react";
import InputField from "./components/inputFiled/inputField";
import "./App.css";
import { ToDoData } from "./ToDoData";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [data, setData] = useState<ToDoData[]>([]);
  const handleAddToDoItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (toDo) {
      setData([...data, { id: Date.now(), todo: toDo, isDone: false }]);
    }
    setToDo("");
    console.log(data);
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        toDo={toDo}
        setToDo={setToDo}
        handleAddToDoItem={handleAddToDoItem}
      />
      {data.map((task) => (
        <h2>{task.todo}</h2>
      ))}
    </div>
  );
};

export default App;
