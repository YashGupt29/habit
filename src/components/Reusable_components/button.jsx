import PropTypes from "prop-types";
import cn from "classnames";

const Button = ({
  variant = "primary",
  color,
  className,
  children,
  onClick,
}) => {
  const buttonClass = cn(
    "px-4 py-2 font-semibold rounded focus:outline-none transition duration-150 ease-in-out",
    {
      "bg-blue-500 text-white hover:bg-blue-600":
        variant === "primary" && !color,
      "bg-gray-500 text-white hover:bg-gray-600":
        variant === "secondary" && !color,
      "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100":
        variant === "ghost" && !color,
    },
    className
  );

  const customStyle = color ? { backgroundColor: color, color: "#FFF" } : {};

  return (
    <button className={buttonClass} style={customStyle} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
