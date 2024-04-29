import React, { useEffect, useState } from "react";
import BuffetFoodCard from "./BuffetFoodCard";
import BuffetFoodTable from "./BuffetFoodTable";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Buffet } from "../../../services/api";
import * as XLSX from "xlsx";
import EditDetailsHeader from "../../editDetailsHeader/EditDetailsHeader";

function BuffetFood({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const saveBuffetData = async (data) => {
    try {
      const response = await Buffet.saveData(data);
      //toast
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
      console.log(response); //console log erro from server
    }
  };

  const saveAllBuffetData = async () => {
    try {
      const response = await Buffet.saveAllData(tableData);
      //toast
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
      console.log(response); //console log erro from server
    }
  };

  const generateAndDownloadExcelSheet = async () => {
    try {
      const response = await Buffet.getAll();
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(response);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "Patients");

      // Write the workbook to a file
      XLSX.writeFile(wb, "patients.xlsx");
    } catch (error) {
      console.error("Error saving data:", error);
      console.log(response); //console log erro from server
    }
  };

  const handleSave = (updatedRow) => {
    //save buffe row data
    saveBuffetData(updatedRow);
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
      {/* toast  */}
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
      {/* toast  */}

      {/* header */}
      <EditDetailsHeader
        title={"Buffet Data"}
        saveAllPatientData={saveAllBuffetData}
        generateAndDownloadExcelSheet={generateAndDownloadExcelSheet}
      />

      {/* card component render if sm view */}
      <div className="md:hidden flex flex-col gap-5 items-center">
        {tableData.map((row, index) => (
          <BuffetFoodCard key={index} row={row} onSave={handleSave} />
        ))}
      </div>

      {/* table component render if desktop view  */}
      <div className="hidden md:block  ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Calories
                </th>
                <th scope="col" className="px-6 py-3">
                  Allergen
                </th>
                <th scope="col" className="px-6 py-3">
                  Discount/Note
                </th>

                <th scope="col" className=" px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <BuffetFoodTable key={index} row={row} onSave={handleSave} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BuffetFood;
