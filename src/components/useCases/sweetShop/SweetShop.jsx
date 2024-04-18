import React from "react";
import SweetShopTable from "./SweetShopTable";
import SweetShopCard from "./SweetShopCard";

function SweetShop({ initialData }) {
  console.log(initialData);
  return (
    <>
      <SweetShopCard initialData={initialData} />
      <SweetShopTable initialData={initialData} />
    </>
  );
}

export default SweetShop;
