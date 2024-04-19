import React from "react";

function SelectAllergen({ unique_id, value, handleChange }) {
  const allergens = [
    "Milk",
    "Mustard",
    "Egg",
    "Gluten",
    "Soya",
    "Fish",
    "Sesame",
    "TreeNuts",
    "Peanuts",
    "Crustaceans",
    "Celery",
    "SO2",
    "Lupin",
    "Molluscs",
    "NOSUGAR",
    "VEGAN",
    "PORK",
    "BEEF",
  ];

  return (
    <>
      <select
        name="ALLERGEN"
        id={unique_id}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
      >
        <option key={"-1"} value={"0"}>
          Choose a allergen
        </option>

        {allergens.map((option, index) => (
          <option key={index} value={`${option}`}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectAllergen;
