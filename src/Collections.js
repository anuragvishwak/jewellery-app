import { IoMdClose } from "react-icons/io";
import img1 from "./jewellery-images/sabrianna-uiKSc7-NM2s-unsplash.jpg";
import img2 from "./jewellery-images/sabrianna-2z7MxnXQs3k-unsplash.jpg";
import img3 from "./jewellery-images/sabrianna-AhIQL2CKq7g-unsplash.jpg";
import img4 from "./jewellery-images/mariano-rivas-ZYet8yoepik-unsplash.jpg";
import { useNavigate } from "react-router-dom";

function Collections({ setOpeningCollectionSection }) {
  const navigation = useNavigate();

  return (
    <div className="fixed top-24 sm:top-28 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl px-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[#d2b986] text-xl sm:text-2xl font-bold font-luxury">
              Our Collections
            </p>
            <p className="text-[#8b857c] font-semibold italic text-sm mt-1">
              Where Every Piece Tells a Story.
            </p>
          </div>
          <button
            onClick={() => setOpeningCollectionSection(false)}
            className="text-gray-600 hover:text-[#d2b986] text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { img: img1, label: "Rings" },
            { img: img2, label: "Necklaces" },
            { img: img3, label: "Pendants" },
            { img: img4, label: "Bracelets" },
          ].map((item, idx) => (
            <div
              onClick={() => {
                const category = item.label.toLowerCase();
                navigation(`/collectionDetailing/${category}`);
                setOpeningCollectionSection(false);
              }}
              key={idx}
              className="text-center"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-20 h-20 cursor-pointer sm:w-28 sm:h-28 mx-auto object-cover rounded-lg shadow"
              />
              <p className="mt-2 text-[#8b857c] font-semibold italic text-sm sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
