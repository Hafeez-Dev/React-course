import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-transparent",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={className ? className : `px-4 py-2 border-2 border-gray-700 rounded-md ${textColor} hover:text-white hover:bg-black ${bgColor}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
