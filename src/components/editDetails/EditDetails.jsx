import React from "react";
import generateInitialData from "../../utils/generateInitialData";
import SweetShop from "../useCases/sweetShop/SweetShop";

function EditDetails({ useCase, currency, tagSize, identifier, totalTokens }) {
  const initialData = generateInitialData(
    useCase,
    currency,
    tagSize,
    identifier,
    totalTokens
  );

  return (
    <div className="bg-blue-100 px-8 rounded-lg py-10">
      <div>
        <h4 class="text-2xl font-bold text-center">Sweet Shop</h4>
      </div>
      <div className=" mt-10 ">
        <SweetShop initialData={initialData} />
      </div>
    </div>
  );
}

export default EditDetails;
