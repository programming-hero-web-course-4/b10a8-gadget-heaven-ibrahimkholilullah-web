import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const categories = [
  "All Product",
  "Laptops",
  "Phones",
  "Accessories",
  "Smart Watches",
  "MacBook",
  "Iphone",
];

const CardCategories = () => {
    const data = useLoaderData()
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  const filteredProducts =
    selectedCategory === "All Product"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="md:flex md:w-[1280px] mx-auto border-2 p-2 rounded-lg">
      {/* Sidebar */}
      <div className="md:w-1/4 p-4 bg-gray-100">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left py-2 px-4 rounded-lg ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div className="md:w-3/4 p-4 grid md:grid-cols-3  gap-6 -mt-4 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.product_id}
              className="border p-4 rounded-lg shadow-xl text-center bg-white"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="md:w-full md:h-80 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.product_title}</h3>
              <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
              <Link to={`/statistics/${product.product_id}`}>
              <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md">
                View Details
              </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">NO DATA HERE</p>
        )}
      </div>
    </div>
  );
};

export default CardCategories;
