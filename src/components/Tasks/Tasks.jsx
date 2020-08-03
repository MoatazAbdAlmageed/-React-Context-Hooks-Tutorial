import React, { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";

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

  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: title,
      },
    ]);
  };
  useEffect(() => {
    console.log("useEffect");
    console.log(tasks);
  });
  return (
    <div className="TasksWrapper">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
};
export default Tasks;
