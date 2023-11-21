import React from "react";
import Annaounce from "../component/Annaounce";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
import Counter from "../component/Counter";

function Cart() {
  return (
    <div>
      <Annaounce />
      <Navbar />
      <div className="m-4">
        <div className="flex justify-center text-5xl">Cart</div>

        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] hover:bg-white border-2 border-text-[#8a4af3">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart: 3</p>
            <p className="ml-5">Whishlist Items: 0</p>
          </div>
          <button className="btn">Ceckout</button>
        </div>

        {/* central div */}
        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1  ">
            {/* list of products div */}
            <div className="flex w-[100%] h-auto items-center mobile:flex-col ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID</b>1234566
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div
                      className="rounded-full border-2 p-[10px]
                    cursor-pointer  ml-1 w-[20px]
                     h-[20px] bg-blue-500"
                    ></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div
                className="
              flex flex-col justify-center items-center
              flex-auto mobile:mt-5"
              >
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            {/* second prodect */}
            <div className="flex w-[100%] h-auto items-center mobile:flex-col">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID</b>1234566
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div
                      className="rounded-full border-2 p-[10px]
                    cursor-pointer  ml-1 w-[20px]
                     h-[20px] bg-black"
                    ></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div
                className="
              flex flex-col justify-center items-center
              flex-auto mobile:mt-5"
              >
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className="p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>$-40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
