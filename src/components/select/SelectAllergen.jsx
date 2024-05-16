import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "primereact/resources/themes/saga-blue/theme.css"; // Import the PrimeReact theme
import "primereact/resources/primereact.css"; // Import the PrimeReact core CSS
import "./custom-multiselect.css"; // Import your custom CSS

function SelectAllergen({ unique_id, value, handleChange }) {
  let initialValue = value.length === 0 ? null : value.split(", ");

  const [selectedAllergens, setSelectedAllergens] = useState(initialValue);

  const allergens = [
    { name: "MILK", code: "MILK" },
    { name: "MUSTARD", code: "MUSTARD" },
    { name: "EGG", code: "EGG" },
    { name: "GLUTEN", code: "GLUTEN" },
    { name: "SOYA", code: "SOYA" },
    { name: "FISH", code: "FISH" },
    { name: "SESAME", code: "SESAME" },
    { name: "TREENUTS", code: "TREENUTS" },
    { name: "PEANUTS", code: "PEANUTS" },
    { name: "CRUSTACEANS", code: "CRUSTACEANS" },
    { name: "CELERY", code: "CELERY" },
    { name: "SO2", code: "SO2" },
    { name: "LUPIN", code: "LUPIN" },
    { name: "MOLLUSCS", code: "MOLLUSCS" },
    { name: "NOSUGAR", code: "NOSUGAR" },
    { name: "VEGAN", code: "VEGAN" },
    { name: "PORK", code: "PORK" },
    { name: "BEEF", code: "BEEF" },
  ];

  const handleChangeMultiselect = (e) => {
    setSelectedAllergens(e.value);
    handleChange({
      target: { name: "ALLERGEN", value: e.target.value.join(", ") },
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <MultiSelect
        value={selectedAllergens}
        onChange={handleChangeMultiselect}
        options={allergens}
        optionLabel="name" // Specify the name property as the label
        optionValue="code" // Specify the code property as the value
        display="chip"
        placeholder="Select Allergens"
        maxSelectedLabels={5}
        className="w-full md:w-20rem text-black bg-white custom-multiselect" // Add custom class here
        name="ALLERGEN"
        id={unique_id}
      />
    </div>
  );
}

export default SelectAllergen;
