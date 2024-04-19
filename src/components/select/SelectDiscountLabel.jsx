import React from "react";

function SelectDiscountLabel({ unique_note_id, value, handleChange }) {
  const options = [
    "ORGANIC",
    "NOSUGAR",
    "DESIGHEE",
    "VEGAN",
    "PUREVEG",
    "EGGLESS",
    "EGG",
    "NONVEG",
  ];
  return (
    <>
      <select
        name="DISC_NOTE"
        id={unique_note_id}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
      >
        <option key={"-1"} value={"0"}>
          Choose a label
        </option>

        {options.map((option, index) => (
          <option key={index} value={`${option}`}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectDiscountLabel;
