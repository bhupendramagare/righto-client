import React, { useEffect, useState } from "react";
import SweetShopTable from "./SweetShopTable";
import SweetShopCard from "./SweetShopCard";

function SweetShop({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const handleSave = (updatedRow) => {
    const updatedData = tableData.map((row) => {
      if (row.id === updatedRow.id) {
        return updatedRow;
      }
      return row;
    });
    setTableData(updatedData);
  };

  return (
    <>
      <div className="md:hidden flex flex-col gap-5 items-center">
        {tableData.map((row, index) => (
          <SweetShopCard key={index} row={row} onSave={handleSave} />
        ))}
      </div>
      <SweetShopTable initialData={initialData} />
    </>
  );
}

export default SweetShop;
