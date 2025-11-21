import React from "react";
import { FaBirthdayCake } from "react-icons/fa";

export default function Silder() {
  return (
    <div className="overflow-hidden bg-[#a87e4f] py-[30px]">
      <div className="inline-block whitespace-nowrap animate-slide">
        {Array(3).fill(
          <span className="inline-flex items-center space-x-2 mx-16 text-white text-[30px] font-semibold">
            <span>Ready to ignite a fresh experience?</span>
            <FaBirthdayCake />
          </span>
        )}
      </div>
    </div>
  );
}
