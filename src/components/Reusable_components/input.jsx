const Input = ({ icon, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900">
          <img src={icon} />
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`pl-10 pr-4 py-2 md:w-[20rem] border border-[#FFFFF] text-black bg-gray-100 rounded-md focus:outline-none `}
      />
    </div>
  );
};

export default Input;
