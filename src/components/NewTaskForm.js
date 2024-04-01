import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, handleSubmit }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category">
          {CATEGORIES.map((category) => {
            if (category !== "All") {
              return (
                <option key={"add" + category} value={category}>
                  {category}
                </option>
              );
            }
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
