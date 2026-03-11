import React, { useState } from "react";
import img2 from "./jewellery-images/cornelia-ng-zZLhoEwGCeM-unsplash.jpg";
import img4 from "./jewellery-images/sabrianna-2z7MxnXQs3k-unsplash.jpg";
import img5 from "./jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg";
import img6 from "./jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg";
import img7 from "./jewellery-images/miao-xiang-leFR7Fj3J6I-unsplash.jpg";
import Navbar from "./Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigation = useNavigate();
  const [gettingImg, setgettingImg] = useState(0);

  const products = {
    id: 1,
    name: "Golden Bloom Earrings",
    description:
      "Elegant floral-inspired gold earrings crafted for timeless beauty.",
    image: img2,
    sub_Images: [img6, img7, img5, img4],
  };
  return (
    <div className="">
      <Navbar />
      <div className="m-10 hidden sm:block">
        <button onClick={() => navigation("/")} className="relative z-[60]">
          <div className="flex items-center space-x-2 border border-[#8b857c] text-[#8b857c] rounded-full py-1 px-4">
            <FaArrowLeft />
            <p className="font-bold">Back</p>
          </div>
        </button>
      </div>
      <div className="pt-20 sm:pt-10 flex justify-center m-6 sm:m-10">
        <div className="sm:flex sm:space-x-16">
          <div className="">
            <div className="mb-5 sm:hidden">
              <p className="text-xl text-[#d2b986] font-luxury font-bold">
                Product XYZ
              </p>
              <p className="text-justify text-sm sm:text-base text-[#8b857c] font-luxury">
                {products.description}
              </p>
            </div>
            <img
              src={products.sub_Images[gettingImg]}
              alt={"Anurag was here"}
              className="w-full h-80 object-cover"
            />
            <div className="grid grid-cols-4 gap-5 sm:flex mt-5 sm:items-center sm:space-x-5">
              {products.sub_Images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Product"
                  onClick={() => setgettingImg(index)}
                  className={`sm:w-28 w-16 h-16 sm:h-28 object-cover cursor-pointer border-2 rounded 
                ${gettingImg === index ? "border-yellow-500" : "border-gray-200"}`}
                />
              ))}
            </div>
          </div>
          <div className="sm:block hidden">
            <p className="text-3xl text-[#d2b986] font-luxury font-bold">
              Product XYZ
            </p>
            <p className="text-justify text-[#8b857c] font-luxury">
              {products.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
