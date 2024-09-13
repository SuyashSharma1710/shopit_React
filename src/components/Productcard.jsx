import React from "react";
import { prod } from "../constants";

// Function to get a random subset of products
const getRandomProducts = (products, num) => {
  // Shuffle the array
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  // Return the first 'num' items
  return shuffled.slice(0, num);
};

function Productcard() {
  // Get a random subset of 6 products
  const randomProducts = getRandomProducts(prod, 6);

  return (
    <div className="bg-gray-100 flex flex-wrap gap-8 pb-12 justify-evenly">
      {randomProducts.map((product, index) => (
        <div
          className="mt-10 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-teal-500 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
          key={index}
        >
          <img
            className="h-48 w-full object-cover object-center"
            src={product.img}
            alt="Product Image"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              {product.pname}
            </h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
              {product.pdesc}.
            </p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                {/* Calculate price after discount */}
                ${(product.mrp - (product.mrp * product.disc) / 100).toFixed(2)}
              </p>
              <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                ${product.mrp}
              </p>
              <p className="ml-auto text-base font-medium text-teal-200">
                {product.disc}% off
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productcard;
