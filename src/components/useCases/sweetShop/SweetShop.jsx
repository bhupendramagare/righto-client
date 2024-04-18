import React, { useEffect, useState } from "react";
import SweetShopTable from "./SweetShopTable";
import SweetShopCard from "./SweetShopCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SweetShop({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const handleSave = (updatedRow) => {
    toast.success("Saved!", {
      position: "top-right",
      autoClose: 1999,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      <ToastContainer
        position="top-right"
        autoClose={1999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div>
        <h4 className="text-2xl font-bold text-center mb-10">Sweet Shop</h4>
      </div>

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
