import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='text-center'>
      <h1 className='bg-yellow-300 font-bold text-center p-[10px] text-2xl'>To-Do App</h1>
      <input
        className='text-xl p-[15px] bg-blue-100 m-[10px] text-center font-bold'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        className='text-xl p-[15px] bg-blue-400 m-[10px] text-center font-bold'
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul className='mt-[20px]'>
        {tasks.map((task, index) => (
          <li key={index} className='flex justify-between items-center bg-gray-100 m-[10px] p-[10px] rounded shadow'>
            <span
              className='text-lg font-medium'
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <div className='flex items-center'>
              <button
                className='m-[5px] p-[10px] bg-green-400 text-white font-bold rounded'
                onClick={() => toggleTask(index)}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                className='m-[5px] p-[10px] bg-red-400 text-white font-bold rounded'
                onClick={() => deleteTask(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
