import React, { useEffect, useState } from "react";
import GroceryStoreTable from "./GroceryStoreTable";
import GroceryStoreCard from "./GroceryStoreCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GroceryStoreb } from "../../../services/api";
import * as XLSX from "xlsx";
import EditDetailsHeader from "../../editDetailsHeader/EditDetailsHeader";

function GroceryStore({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const saveGroceryData = async (data) => {
    try {
      const response = await GroceryStoreb.saveData(data);
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
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const saveAllGroceryData = async () => {
    try {
      const response = await GroceryStoreb.saveAllData(tableData);
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
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const generateAndDownloadExcelSheet = async () => {
    try {
      // const response = await GroceryStoreb.getAll();
      const response = tableData;

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(response);

      XLSX.utils.book_append_sheet(wb, ws, "GroceryStore");
      XLSX.writeFile(wb, "grocery_store.xlsx");
    } catch (error) {
      console.error("Error generating Excel sheet:", error);
    }
  };

  const handleSave = (updatedRow, isSaveClick = false) => {
    //save buffe row data
    if (isSaveClick) saveGroceryData(updatedRow);
    //

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

      {/* header */}
      <EditDetailsHeader
        title={"Grocery Store"}
        saveAllPatientData={saveAllGroceryData}
        generateAndDownloadExcelSheet={generateAndDownloadExcelSheet}
      />

      <div className="md:hidden flex flex-col gap-5 items-center">
        {tableData.map((row, index) => (
          <GroceryStoreCard key={index} row={row} onSave={handleSave} />
        ))}
      </div>

      <div className="hidden md:block">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Sale Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Discount/Note
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <GroceryStoreTable key={index} row={row} onSave={handleSave} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default GroceryStore;
