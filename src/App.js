import "./App.css";
import { IoLocationSharp } from "react-icons/io5";
import img1 from "./jewellery-mock.jpg";
import img2 from "./jewellery-images/andrew-hutchings-Asngw4A5_tM-unsplash.jpg";
import img3 from "./jewellery-images/sabrianna-uiKSc7-NM2s-unsplash.jpg";
import img4 from "./jewellery-images/sabrianna-AhIQL2CKq7g-unsplash.jpg";
import img5 from "./jewellery-images/cornelia-ng-zZLhoEwGCeM-unsplash.jpg";
import img6 from "./jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg";
import img7 from "./jewellery-images/miao-xiang-leFR7Fj3J6I-unsplash.jpg";

function App() {
  return (
    <div className="">
      <div className="relative">
        <img
          src={img1}
          alt="Jewellery banner"
          className="w-full h-60 sm:h-[600px] object-cover"
        />

        <div className="absolute top-0 left-0 w-full p-3 sm:p-5">
          <div className="flex items-center w-full justify-between">
            {" "}
            <p className="font-bold text-[#d2b986] font-luxury text-2xl">
              Mira Jewellers 
            </p>
            <a
              href="https://www.google.com/maps/place/Virar,+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLocationSharp
                className="text-[#d2b986] cursor-pointer"
                size={25}
              />
            </a>
          </div>
          <p className="text-[#d2b986] mt-28 sm:mt-60 mr-1 sm:mr-8 text-sm font-bold sm:text-5xl  font-luxury text-right">
            Crafted With Passion
          </p>
          <p className="text-white sm:mr-52 mt-1 sm:mt-2 mr-9 italic sm:text-3xl text-sm font-semibold  font-luxury text-right">
            Worn With Pride
          </p>
        </div>
      </div>

      <div className="m-3 sm:m-5">
        <div>
          <div className="mb-3">
            <p className="text-[#d2b986] text-xl sm:text-3xl font-bold font-luxury">
              Customer Favorites
            </p>
            <p className="font-semibold text-[#8b857c] text-sm sm:text-base font-luxury italic">
              Jewellery that shines brighter every day.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img3}
              alt="Jewellery banner"
              className="w-full h-96 sm:h-[450px]"
            />
            <p className="text-[#d2b986] font-luxury font-bold">Golden Rings</p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>

          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img4}
              alt="Jewellery banner"
              className="w-full h-96 sm:h-[450px]"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>

          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img5}
              alt="Jewellery banner"
              className="w-full h-96 sm:h-[450px]"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
        </div>

        <div className="mb-3 mt-3 sm:mt-5">
          <p className="text-[#d2b986] text-xl sm:text-3xl font-bold font-luxury">
            Our Products
          </p>
          <p className="font-semibold text-[#8b857c] text-sm sm:text-base font-luxury italic">
            Crafted with precision, designed for elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img6}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img2}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img7}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img5}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img4}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img7}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img4}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img2}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img6}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
              Elegant floral-inspired gold earrings crafted for timeless beauty.
            </p>
          </div>
          <div className="border border-gray-300 p-3 rounded">
            <img
              src={img5}
              alt="Jewellery banner"
              className="w-full h-44 sm:h-72"
            />
            <p className="text-[#d2b986] font-luxury font-bold">
              Golden Bloom Earrings
            </p>
            <p className="text-sm text-[#8b857c] sm:text-justify">
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
