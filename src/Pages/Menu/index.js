import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utilis/Firebase";
import CategoryTabs from "../../Components/CategoryTabs";
import MenuItem from "../../Components/MenuItem";
import MenuDetailsModal from "../../Components/MenuDetailsModal";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  // Fetch menu items from Firebase
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

  // Filter menu items based on selected category
  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-6">
      {/* Category Tabs */}
      <div className="pt-20 p-6">
        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredMenu.map((item) => (
          <MenuItem key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {/* Modal for Additional Details */}
      {selectedItem && (
        <MenuDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Menu;
