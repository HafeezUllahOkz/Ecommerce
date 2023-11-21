import React from "react";
import Annaounce from "../component/Annaounce";
import Navbar from "../component/Navbar";
import Products from "../component/Products";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

function CatogoryPage() {
  return (
    <div>
      <Annaounce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <select className="mobile:mt-3 ml-3 border-2 border-silver">
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>

          <div className="flex">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-silver">
              <option>Newset(first)</option>
              <option>Oldest(first)</option>
              <option>Price (Asc)</option>
              <option>Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CatogoryPage;
