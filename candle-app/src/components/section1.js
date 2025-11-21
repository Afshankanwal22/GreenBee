// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const section1 = () => {
  const bgImage = "https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_candlea_home1_image_1.jpg?v=1728782658"; 

  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Heading with animation */}
      <h1 className=" lg:text-8xl font-serif italic leading-tight mb-6 ">
          Discover the first scent in our base  <em className="italic"> notes collection simple</em>, grounding scents to calm candles
        </h1>

      {/* Button with animation */}
      <button className="mt-6 px-[50px] py-6 text-[25px] border border-black hover:bg-[#a87e4f] hover:border-[#a87e4f]  hover:text-white transition">
          About Us →
        </button>
    </section>
  );
};

export default section1;
