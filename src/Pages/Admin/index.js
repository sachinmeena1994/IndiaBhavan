import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Utilis/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import FoodForm from "../../Components/FoodForm";

const Admin = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [activeSidebarOption, setActiveSidebarOption] = useState("Manage Menu");
  const [editMode, setEditMode] = useState(false);
  const [editFoodData, setEditFoodData] = useState(null);

  // Fetch menu items and categories
  useEffect(() => {
    const fetchMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "Menu"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMenuData(data);

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchMenu();
  }, []);

  // Delete food item with confirmation
  const handleDeleteFood = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food item? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "Menu", id));
      setMenuData((prevMenu) => prevMenu.filter((item) => item.id !== id));
      toast.success("Food item deleted successfully!");
    } catch (error) {
      toast.error("Error deleting food item. Please try again.");
      console.error("Error deleting food item:", error);
    }
  };

  // Edit food item
  const handleEditFood = (food) => {
    setEditMode(true);
    setEditFoodData(food);
    setIsAddFormVisible(true);
  };

  // Filter menu items by category and search term
  const filteredMenu = menuData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // Define columns for the data table
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
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
    <div className="flex h-screen">
      <ToastContainer />
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <ul className="space-y-4">
          {["Manage Menu", "Orders", "Settings"].map((option) => (
            <li
              key={option}
              onClick={() => setActiveSidebarOption(option)}
              className={`p-2 rounded cursor-pointer ${
                activeSidebarOption === option
                  ? "bg-gray-700 text-yellow-400"
                  : "hover:bg-gray-700"
              } transition duration-200`}
            >
              {option}
            </li>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">{activeSidebarOption}</h2>

        {activeSidebarOption === "Manage Menu" && (
          <div>
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

            {isAddFormVisible && (
              <FoodForm
                editMode={editMode}
                editFoodData={editFoodData}
                setMenuData={setMenuData}
                setIsAddFormVisible={setIsAddFormVisible}
              />
            )}

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

            {/* Data Table */}
            <DataTable
              title="Menu Items"
              columns={columns}
              data={filteredMenu}
              pagination
              highlightOnHover
              striped
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
