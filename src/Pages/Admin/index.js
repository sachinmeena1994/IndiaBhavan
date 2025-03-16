import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Utilis/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import FoodForm from "../../Components/FoodForm";
import {
  FaBars,
  FaTimes,
  FaUtensils,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import Footer from "../../Components/Footer"; // Ensure Footer is imported

const Admin = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [activeSidebarOption, setActiveSidebarOption] = useState("Manage Menu");
  const [editMode, setEditMode] = useState(false);
  const [editFoodData, setEditFoodData] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "Menu"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMenuData(data);

      const uniqueCategories = [
        "All",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchMenu();
  }, []);

  const sidebarOptions = [
    { name: "Manage Menu", icon: <FaUtensils /> },
    { name: "Orders", icon: <FaShoppingCart /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  const handleDeleteFood = async (id) => {
    if (!window.confirm("Are you sure you want to delete this food item?"))
      return;

    try {
      await deleteDoc(doc(db, "Menu", id));
      setMenuData((prev) => prev.filter((item) => item.id !== id));
      toast.success("Food item deleted successfully!");
    } catch (error) {
      toast.error("Error deleting food item.");
    }
  };

  const handleEditFood = (food) => {
    setEditMode(true);
    setEditFoodData(food);
    setIsAddFormVisible(true);
  };

  const filteredMenu = menuData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Price", selector: (row) => `$${row.price}`, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            onClick={() => handleEditFood(row)}
            className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteFood(row.id)}
            className="bg-red-500 text-white px-2 py-1 rounded-md"
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <ToastContainer />

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white h-full p-4 fixed transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-64"
        } flex flex-col`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="text-white mb-4 p-2 rounded-md hover:bg-gray-700 transition duration-200 flex items-center justify-between"
        >
          {isSidebarCollapsed ? <FaBars size={20} /> : <FaTimes size={20} />}
          {!isSidebarCollapsed && <span>Close</span>}
        </button>

        {/* Sidebar Options */}
        <ul className="space-y-4">
          {sidebarOptions.map((option) => (
            <li
              key={option.name}
              onClick={() => setActiveSidebarOption(option.name)}
              className={`p-2 rounded cursor-pointer flex items-center transition duration-200 ${
                activeSidebarOption === option.name
                  ? "bg-gray-700 text-yellow-400"
                  : "hover:bg-gray-700"
              }`}
            >
              <span className="text-xl">{option.icon}</span>
              {!isSidebarCollapsed && (
                <span className="ml-3">{option.name}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Wrapper */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Only 1 Scrollbar here */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">{activeSidebarOption}</h2>

          {activeSidebarOption === "Manage Menu" && (
            <div>
              {/* Add New Button */}
              <button
                onClick={() => {
                  setIsAddFormVisible(!isAddFormVisible);
                  setEditMode(false);
                  setEditFoodData(null);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6"
              >
                {isAddFormVisible ? "Cancel" : "Add New Food"}
              </button>

              {/* Search and Filter */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <label className="block mb-2 font-semibold">
                    Filter by Category:
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border rounded-md p-2"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-semibold">Search:</label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name..."
                    className="border rounded-md p-2 w-full"
                  />
                </div>
              </div>

              {/* Single Scrollable Data Table */}
              <div className="bg-white p-4 rounded-md shadow-md">
                <DataTable
                  title="Menu Items"
                  columns={columns}
                  data={filteredMenu}
                  pagination
                  highlightOnHover
                  striped
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
