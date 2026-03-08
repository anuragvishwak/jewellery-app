import "./App.css";
import { IoLocationSharp } from "react-icons/io5";
import img2 from "./jewellery-images/andrew-hutchings-Asngw4A5_tM-unsplash.jpg";
import img3 from "./jewellery-images/sabrianna-uiKSc7-NM2s-unsplash.jpg";
import img4 from "./jewellery-images/sabrianna-AhIQL2CKq7g-unsplash.jpg";
import img5 from "./jewellery-images/cornelia-ng-zZLhoEwGCeM-unsplash.jpg";
import img6 from "./jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg";
import img7 from "./jewellery-images/miao-xiang-leFR7Fj3J6I-unsplash.jpg";
//image used in carousel.
import img10 from "./sabrianna-Eulnh2kzUR0-unsplash.jpg";
import img11 from "./sabrianna-ttMO9io6uMY-unsplash.jpg";
import img12 from "./sabrianna-wSzMIJGcXUw-unsplash.jpg";
import img13 from "./sabrianna-x_iL7y7VV4M-unsplash.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaAward, FaBars, FaHome, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import Collections from "./Collections";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [openingCollectionSection, setopeningCollectionSection] =
    useState(false);

  return (
    <div className="">
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-[300px] sm:h-[620px]"
        >
          <SwiperSlide>
            <img
              src={img10}
              alt="Jewellery banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={img11}
              alt="Jewellery banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={img12}
              alt="Jewellery banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img13}
              alt="Jewellery banner"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute inset-0 bg-black/10 z-10"></div>

        <div className="absolute top-0 left-0 w-full p-3 sm:p-5 z-10">
          <div className="fixed w-full flex justify-center">
            <div className="bg-white flex items-center p-3 rounded-full justify-center space-x-10">
              <p className="font-bold text-[#d2b986] border rounded-full border-[#d2b986] px-3 py-1.5 font-luxury sm:text-xl">
                Mira Jewellers
              </p>

              <div className="hidden sm:flex items-center text-[#d2b986] space-x-3 text-lg font-semibold">
                <button>Home</button>
                <button
                  onClick={() => {
                    setopeningCollectionSection(!openingCollectionSection);
                  }}
                >
                  Collections
                </button>
                <button>About Us</button>
                <button>Contact</button>
              </div>

              {openingCollectionSection && (
                <Collections
                  setopeningCollectionSection={setopeningCollectionSection}
                />
              )}

              {menuOpen && (
                <div className="text-[#d2b986] bg-white rounded-2xl flex flex-col justify-center right-[68px] fixed top-[85px] w-[254px] p-4 font-semibold">
                  <button className="flex items-center space-x-1 justify-start">
                    <FaHome /> <p>Home</p>
                  </button>
                  <button
                    onClick={() => {
                      setopeningCollectionSection(!openingCollectionSection);
                    }}
                    className="flex items-center space-x-1 justify-start"
                  >
                    <GiBigDiamondRing /> <p>Collections</p>
                  </button>
                  <button className="flex items-center space-x-1 justify-start">
                    <FaAward /> <p>About Us</p>
                  </button>
                  <button className="flex items-center space-x-1 justify-start">
                    <FaPhone />
                    <p>Contact</p>
                  </button>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <a
                  href="https://www.google.com/maps/place/Virar,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLocationSharp
                    className="text-[#d2b986] cursor-pointer"
                    size={30}
                  />
                </a>
                <button
                  onClick={() => {
                    setmenuOpen(!menuOpen);
                    console.log("hello");
                  }}
                >
                  <FaBars size={20} className="text-[#d2b986] sm:hidden" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-48 sm:mt-[470px] space-x-2">
            <p className="text-[#d2b986] text-center text-sm font-bold sm:text-5xl font-luxury">
              Crafted With Passion
            </p>

            <p className="text-white text-center italic sm:text-3xl text-sm font-semibold font-luxury">
              Worn With Pride
            </p>
          </div>
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
        <div className="grid grid-cols-1  gap-3 sm:gap-5 sm:grid-cols-3">
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

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-5">
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
