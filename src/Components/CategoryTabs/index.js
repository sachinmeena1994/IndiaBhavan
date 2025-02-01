import React from "react";

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  const formatCategory = (category) =>
    category
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="overflow-x-auto whitespace-nowrap flex gap-4 mb-6 px-2 py-3 bg-gray-100 rounded-md shadow-sm">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
            selectedCategory === category
              ? "bg-red-600 text-white shadow-md"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
          }`}
        >
          {formatCategory(category)}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
