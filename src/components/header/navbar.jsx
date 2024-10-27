import { useState } from "react";
import image from "../../assets/logoHabot.png";
import Button from "../Reusable_components/button";
import HamburgerMenu from "../Reusable_components/hamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const serviceTags = ["Service 1", "Service 2", "Service 3", "Service 4"];

  return (
    <div className="bg-gray-100 pt-2 md:px-[5em] flex justify-between items-center">
      <img src={image} width={120} className="ml-[2rem]" />

      <div className="hidden md:flex justify-center items-center md:gap-[2rem]">
        <p className="text-gray-600 text-sm">Find Suppliers</p>
        <select className="text-gray-600 text-sm bg-transparent cursor-pointer rounded-md px-2 py-1 focus:outline-none">
          <option value="">Find Service Tags</option>
          {serviceTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <Button className="border-[#00732F]" variant="ghost">
          <span> Login/Sign Up</span>
        </Button>
      </div>

      <button
        className="md:hidden mr-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <HamburgerMenu
        isOpen={isOpen}
        serviceTags={serviceTags}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Navbar;
