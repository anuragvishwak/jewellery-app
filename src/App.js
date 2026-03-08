import logo from "./logo.svg";
import "./App.css";
import { IoLocationSharp } from "react-icons/io5";
import img1 from "./jewellery-mock.jpg";
import img2 from "./jewellery-images/andrew-hutchings-Asngw4A5_tM-unsplash.jpg";

function App() {
  return (
    <div className="">
      <div className="relative">
        <img src={img1} className="w-full h-60 sm:h-[600px] object-cover" />

        <div className="absolute top-0 left-0 w-full p-3 sm:p-5">
          <div className="flex items-center w-full justify-between">
            {" "}
            <p className="font-bold text-[#d2b986] font-luxury text-2xl">
              Jewellery Shop
            </p>
            <IoLocationSharp className="text-[#d2b986]" size={25} />
          </div>
          <p className="text-[#d2b986] mt-28 sm:mt-60 sm:mr-8 font-bold sm:text-5xl  font-luxury text-right">
            Crafted With Passion
          </p>
          <p className="text-white sm:mr-52 mt-1 sm:mt-2 mr-9 italic sm:text-3xl font-semibold  font-luxury text-right">
            Worn With Pride
          </p>
        </div>
      </div>

      <div className="m-3 sm:m-5">
        <div className="mb-3">
          <p className="text-[#d2b986] text-3xl font-bold font-luxury">
            Our Products
          </p>
          <p className="font-semibold text-[#8b857c] font-luxury italic">
            Crafted with precision, designed for elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full h-auto" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img src={img2} className="w-full" />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// dark grey - #8b857c
// golden color - #d2b986
