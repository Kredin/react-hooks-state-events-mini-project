import React from "react";
import Task from "./Task";

function TaskList({ currentTasks, deleteTask }) {
  console.log(currentTasks);
  return (
    <div className="tasks">
      {currentTasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteTask={deleteTask}
        />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
