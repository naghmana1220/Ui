import { useState } from "react";

const categories = ["Chairs", "Sofas", "Tables", "Decor"];

const Category = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    return (
        <div className="flex gap-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-md ${
                        selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Category;
