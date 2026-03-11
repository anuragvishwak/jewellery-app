import { useState } from "react";
import { FaArrowLeft, FaAward, FaBars, FaHome, FaPhone } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import Collections from "./Collections";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const current_location = useLocation();
  const navigation = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const [openingCollectionSection, setopeningCollectionSection] =
    useState(false);
  return (
    <div>
      <div className="fixed top-3 left-0  right-0 z-50 flex justify-center px-4">
        <div className="bg-white flex border border-gray-300 items-center mx-5 sm:mx-0 justify-between rounded-full px-3 py-3 w-full sm:w-6/12 shadow-lg">
          <p className="font-bold text-[#d2b986] border-2 border-[#d2b986] px-4 py-1.5 rounded-full font-luxury text-lg sm:text-xl whitespace-nowrap">
            Mira Jewellers
          </p>

          <div className="hidden sm:flex items-center text-[#d2b986] space-x-6 text-lg font-semibold">
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

          <div className="flex items-center space-x-2 sm:hidden">
            {current_location.pathname === '/ProductDetails'?
            <button onClick={() => navigation("/")} className="relative z-[60]">
              <div className="flex items-center space-x-2 border border-[#8b857c] text-[#8b857c] rounded-full p-2">
                <FaArrowLeft size={20} className="" />
              </div>
            </button>
            : ''}
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
    </div>
  );
}

export default Navbar;
