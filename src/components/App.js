import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentTasks, setCurrentTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function deleteTask(text) {
    setCurrentTasks((tasks) => {
      return tasks.filter((task) => {
        if (task.text !== text) {
          return { ...task };
        }
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentTasks([
      ...currentTasks,
      {
        text: event.target.text.value,
        category: event.target.category.value,
      },
    ]);
  }

  function categoryFilter(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target.parentNode.children);
    const children = event.target.parentNode.children;
    console.log(children);
    children.forEach((element) => {
      element.className = "";
    });
    event.target.className = "selected";
    console.log(event);
  }

  const displayTasks = currentTasks.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} categoryFilter={categoryFilter} />
      <NewTaskForm CATEGORIES={CATEGORIES} handleSubmit={handleSubmit} />
      <TaskList currentTasks={displayTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
