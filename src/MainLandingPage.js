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
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function MainLandingPage() {

  const navigation = useNavigate();

  const products = [
    {
      id: 1,
      name: "Golden Bloom Earrings",
      description:
        "Elegant floral-inspired gold earrings crafted for timeless beauty.",
      image: img2,
    },
    {
      id: 2,
      name: "Golden Bloom Earrings",
      description:
        "Elegant floral-inspired gold earrings crafted for timeless beauty.",
      image: img6,
    },
    {
      id: 3,
      name: "Golden Bloom Earrings",
      description:
        "Elegant floral-inspired gold earrings crafted for timeless beauty.",
      image: img7,
    },
    {
      id: 4,
      name: "Golden Bloom Earrings",
      description:
        "Elegant floral-inspired gold earrings crafted for timeless beauty.",
      image: img5,
    },
    {
      id: 5,
      name: "Golden Bloom Earrings",
      description:
        "Elegant floral-inspired gold earrings crafted for timeless beauty.",
      image: img4,
    },
    {
      id: 6,
      name: "Golden Bloom Earrings",
      description:
        "Elegant floral-inspired gold earrings crafted for timeless beauty.",
      image: img3,
    },
  ];

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
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-5">
          <h2 className="text-[#d2b986] text-2xl sm:text-4xl font-bold font-luxury">
            Our Products
          </h2>
          <p className="text-[#8b857c] font-semibold italic mt-1">
            Crafted with precision, designed for elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
              <div onClick={()=>{navigation('/ProductDetails')}} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-72 object-cover"
                />

                <div className="p-3">
                  <h3 className="text-[#d2b986] font-luxury font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-[#8b857c] text-xs sm:text-sm mt-1">
                    {product.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLandingPage;

// dark grey - #8b857c
// golden color - #d2b986
