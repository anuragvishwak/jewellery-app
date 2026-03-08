import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import img1 from "./jewellery-images/sabrianna-uiKSc7-NM2s-unsplash.jpg";
import img2 from "./jewellery-images/cornelia-ng-zZLhoEwGCeM-unsplash.jpg";
import img3 from "./jewellery-images/sabrianna-AhIQL2CKq7g-unsplash.jpg";
import img4 from "./jewellery-images/sabrianna-2z7MxnXQs3k-unsplash.jpg";
import img5 from './jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg';

function CollectionDetailing() {
  const { category } = useParams();
  return (
    <div>
      <Navbar />
      <div className="my-10 max-w-7xl sm:mx-5 mx-5 pt-20">
        <p className="capitalize mb-5 text-[#d2b986] text-2xl sm:text-3xl font-bold font-luxury">
          {category} Collection
        </p>

        {category === "rings" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-5">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={img1}
                alt="Product"
                className="w-full h-48 sm:h-72 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[#d2b986] font-luxury font-semibold">
                  Golden Bloom Earrings
                </h3>
                <p className="text-[#8b857c] text-xs sm:text-sm mt-1">
                  Elegant floral-inspired gold earrings crafted for timeless
                  beauty.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={img2}
                alt="Product"
                className="w-full h-48 sm:h-72 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[#d2b986] font-luxury font-semibold">
                  Golden Bloom Earrings
                </h3>
                <p className="text-[#8b857c] text-xs sm:text-sm mt-1">
                  Elegant floral-inspired gold earrings crafted for timeless
                  beauty.
                </p>
              </div>
            </div>
          </div>
        ) : category === "pendants" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={img3}
                alt="Product"
                className="w-full h-48 sm:h-72 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[#d2b986] font-luxury font-semibold">
                  Golden Bloom Earrings
                </h3>
                <p className="text-[#8b857c] text-xs sm:text-sm mt-1">
                  Elegant floral-inspired gold earrings crafted for timeless
                  beauty.
                </p>
              </div>
            </div>
          </div>
        ) : category === "necklaces" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={img4}
                alt="Product"
                className="w-full h-48 sm:h-72 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[#d2b986] font-luxury font-semibold">
                  Golden Bloom Earrings
                </h3>
                <p className="text-[#8b857c] text-xs sm:text-sm mt-1">
                  Elegant floral-inspired gold earrings crafted for timeless
                  beauty.
                </p>
              </div>
            </div>
          </div>
        ) : (
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={img5}
                alt="Product"
                className="w-full h-48 sm:h-72 object-cover"
              />
              <div className="p-3">
                <h3 className="text-[#d2b986] font-luxury font-semibold">
                  Golden Bloom Earrings
                </h3>
                <p className="text-[#8b857c] text-xs sm:text-sm mt-1">
                  Elegant floral-inspired gold earrings crafted for timeless
                  beauty.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CollectionDetailing;
