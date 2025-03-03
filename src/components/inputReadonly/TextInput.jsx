import React from "react";

function TextInput({ name, id, value, className, placeholder = "" }) {
  return (
    <>
      <input
        type="text"
        name={name}
        id={id}
        className={` ${className}  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        placeholder={placeholder}
        value={value}
        readOnly
      />
    </>
  );
}

export default TextInput;
