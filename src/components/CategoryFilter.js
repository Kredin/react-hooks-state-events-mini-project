import React from "react";

function CategoryFilter({ CATEGORIES, categoryFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button key={category} value={category} onClick={categoryFilter}>
          {category}
        </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
