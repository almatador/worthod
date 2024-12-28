import React from "react";

const Input = ({
  type = "text", 
  placeholder = "Enter text", // النص الوصفي الافتراضي
  value,
  onChange,
  className = "", // يسمح بإضافة كلاس خارجي
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-3 bg-transparent border-b-[1px] border-white text-white  focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-all duration-300 ${className}`}
    />
  );
};

export default Input;
