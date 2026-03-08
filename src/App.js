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
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[300px] sm:h-[620px]"
        >
          <SwiperSlide>
            <img
              src={img10}
              alt="Jewellery banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img11}
              alt="Jewellery banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img12}
              alt="Jewellery banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img13}
              alt="Jewellery banner 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute inset-0 bg-black/10 z-10"></div>

        <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
          <div className="bg-white flex items-center mx-5 sm:mx-0 justify-between rounded-full px-3 sm:px-8 py-3 w-full sm:w-6/12 shadow-lg">
            <p className="font-bold text-[#d2b986] border-2 border-[#d2b986] px-4 py-1.5 rounded-full font-luxury text-lg sm:text-xl whitespace-nowrap">
              Mira Jewellers
            </p>

            <div className="hidden sm:flex items-center text-[#d2b986] space-x-6 text-lg font-semibold">
              <button>Home</button>
              <button
                onClick={() =>
                  setopeningCollectionSection(!openingCollectionSection)
                }
              >
                Collections
              </button>
              <button>About Us</button>
              <button>Contact</button>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://www.google.com/maps/place/Virar,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLocationSharp
                  className="text-[#d2b986] cursor-pointer"
                  size={28}
                />
              </a>
              <button
                className="sm:hidden border border-[#d2b986] rounded-full p-2"
                onClick={() => setmenuOpen(!menuOpen)}
              >
                <FaBars size={20} className="text-[#d2b986]" />
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed top-[90px] z-50 flex justify-center w-full text-[#d2b986] font-semibold sm:hidden">
            <div className="w-64 bg-white rounded-xl shadow-xl p-5">
              <button className="flex items-center space-x-3 py-2 w-full justify-start">
                <FaHome /> <span>Home</span>
              </button>
              <button
                className="flex items-center space-x-3 py-2 w-full justify-start"
                onClick={() => {
                  setopeningCollectionSection(!openingCollectionSection);
                  setmenuOpen(false);
                }}
              >
                <GiBigDiamondRing /> <span>Collections</span>
              </button>
              <button className="flex items-center space-x-3 py-2 w-full justify-start">
                <FaAward /> <span>About Us</span>
              </button>
              <button className="flex items-center space-x-3 py-2 w-full justify-start">
                <FaPhone /> <span>Contact</span>
              </button>
            </div>
          </div>
        )}

        {openingCollectionSection && (
          <Collections
            setOpeningCollectionSection={setopeningCollectionSection}
          />
        )}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-[#d2b986] text-2xl sm:text-5xl font-bold font-luxury">
              Crafted With Passion
            </p>
            <p className="text-white text-xl sm:text-3xl italic font-semibold font-luxury">
              Worn With Pride
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10">
          <h2 className="text-[#d2b986] text-2xl sm:text-4xl font-bold font-luxury">
            Customer Favorites
          </h2>
          <p className="text-[#8b857c] font-semibold italic mt-1">
            Jewellery that shines brighter every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { img: img3, title: "Golden Rings" },
            { img: img4, title: "Golden Bloom Earrings" },
            { img: img5, title: "Timeless Gold Necklace" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-[#d2b986] font-luxury font-bold text-lg">
                  {item.title}
                </h3>
                <p className="text-[#8b857c] text-sm mt-1">
                  Elegant floral-inspired gold jewellery crafted for timeless
                  beauty.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-10">
          <h2 className="text-[#d2b986] text-2xl sm:text-4xl font-bold font-luxury">
            Our Products
          </h2>
          <p className="text-[#8b857c] font-semibold italic mt-1">
            Crafted with precision, designed for elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {[img2, img6, img7, img5, img4, img3, img2, img6, img7, img4].map(
            (img, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
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
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

// dark grey - #8b857c
// golden color - #d2b986
