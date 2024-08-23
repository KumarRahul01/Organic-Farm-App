import React, { useEffect } from "react";
import toast from "react-hot-toast";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    // bg-[#22c55e]
    <div className="w-full h-dvh">
      <Header />

      {/* Slider */}
      <div>
        <Slider />
      </div>

      {/* Top Products */}
      <div>
        <TopProducts />
      </div>

      {/* NewsLetter */}
      {/* <div>
        <Newsletter />
      </div> */}

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
