import React from "react";
import generateInitialData from "../../utils/generateInitialData";
import SweetShop from "../useCases/sweetShop/SweetShop";
import GroceryStore from "../useCases/groceryStore/GroceryStore";
import BuffetFood from "../useCases/buffetFood/BuffetFood";

function EditDetails({ useCase, currency, tagSize, identifier, totalTokens }) {
  const initialData = generateInitialData(
    useCase,
    currency,
    tagSize,
    identifier,
    totalTokens
  );

  let content;
  switch (useCase) {
    case "sw":
      content = <SweetShop initialData={initialData} />;
      break;
    case "gr":
      content = <GroceryStore initialData={initialData} />;
      break;
    case "bf":
      content = <BuffetFood initialData={initialData} />;
      break;
  }

  return <div className="bg-blue-100 px-8 rounded-lg py-10">{content}</div>;
}

export default EditDetails;
