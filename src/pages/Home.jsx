import React from "react";
import Annaounce from "../component/Annaounce";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Categories from "../component/Categories";
import Products from "../component/Products";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
// import ReactTyped from "react-typed-component";

function Home() {
  return (
    <div>
      {/* <ReactTyped
        strings={["Here you can find anything"]}
        typeSpeed={40}
        backSpeed={50}
        // attr="placeholder"
        loop
      /> */}
      <Annaounce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
