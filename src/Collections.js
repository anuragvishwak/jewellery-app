import React from "react";
import img1 from "./jewellery-images/sabrianna-uiKSc7-NM2s-unsplash.jpg";
import img2 from './jewellery-images/sabrianna-2z7MxnXQs3k-unsplash.jpg';
import img3 from './jewellery-images/sabrianna-AhIQL2CKq7g-unsplash.jpg';
import img4 from './jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg';
import { IoMdClose } from "react-icons/io";
function Collections({ setopeningCollectionSection }) {
  return (
    <div className="fixed top-[86px] sm:top-24 left-[10%] w-[65%] sm:left-[29%] z-50 sm:w-[600px]">
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <div className=" flex items-start justify-between mb-5">
          <div>
            <p className="text-[#d2b986] text-lg sm:text-xl font-bold font-luxury">
            Our Collections
          </p>

          <p className="font-semibold text-[#8b857c] text-sm font-luxury italic">
            Where Every Piece Tells a Story.
          </p>
          </div>
        <button onClick={()=>{setopeningCollectionSection(false)}}><IoMdClose /></button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div>
            <img src={img1} className="h-20 w-20 sm:32 sm:w-auto" />
            <p className="sm:text-center italic font-semibold text-[#8b857c]">Rings</p>
          </div>

          <div>
            <img src={img2} className="h-20 w-20 sm:32 sm:w-auto" />
            <p className="sm:text-center italic font-semibold text-[#8b857c]">Necklaces</p>
          </div>
          <div>
            <img src={img3} className="h-20 w-20 sm:32 sm:w-auto" />
            <p className="sm:text-center italic font-semibold text-[#8b857c]">Pendals</p>
          </div>
          <div>
            <img src={img4} className="h-20 w-20 sm:32 sm:w-auto" />
            <p className="sm:text-center italic font-semibold text-[#8b857c]">Bracelets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
