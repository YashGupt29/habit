import Button from "./button";

const HamburgerMenu = ({ isOpen, serviceTags, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600 focus:outline-none"
        onClick={onClose}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <div className="flex flex-col items-center mt-16 space-y-4">
        <p className="text-gray-600 text-sm">Find Suppliers</p>
        <select className="text-gray-600 text-sm bg-transparent cursor-pointer rounded-md px-2 py-1 focus:outline-none">
          <option value="">Find Service Tags</option>
          {serviceTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <Button className="text-[#00732F] border-[#00732F]" variant="ghost">
          Login/Sign Up
        </Button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
