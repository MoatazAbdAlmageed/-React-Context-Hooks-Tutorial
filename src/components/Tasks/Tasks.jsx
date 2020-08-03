import React, { useState } from "react";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "task1",
    },
    {
      id: 2,
      title: "task2",
    },
    {
      id: 3,
      title: "task3",
    },
  ]);

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: 4,
        title: "task4",
      },
    ]);
  };

  return (
    <div className="TasksWrapper">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>

      <button onClick={addTask}>Add Task</button>
    </div>
  );
};
export default Tasks;
