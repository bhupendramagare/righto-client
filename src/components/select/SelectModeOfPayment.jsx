import React from "react";

function SelectModeOfPayment({ unique_note_id, value, handleChange }) {
  const options = ["CASH", "INSURANCE", "CGHS", "ESIC"];
  return (
    <>
      <select
        name="MODE_OF_PAYMENT"
        id={unique_note_id}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
      >
        <option key={"-1"} value={"0"}>
          Choose a payment mode
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

export default SelectModeOfPayment;
