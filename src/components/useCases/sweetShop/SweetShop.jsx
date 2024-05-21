import React, { useEffect, useState } from "react";
import SweetShopTable from "./SweetShopTable";
import SweetShopCard from "./SweetShopCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SweetShopb } from "../../../services/api";
import * as XLSX from "xlsx";
import EditDetailsHeader from "../../editDetailsHeader/EditDetailsHeader";

function SweetShop({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const saveSweetShopData = async (data) => {
    try {
      const response = await SweetShopb.saveData(data);
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

  const saveAllSweetShopData = async () => {
    try {
      const response = await SweetShopb.saveAllData(tableData);
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
      // const response = await SweetShopb.getAll();
      const response = tableData;

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(response);

      XLSX.utils.book_append_sheet(wb, ws, "SweetShop");
      XLSX.writeFile(wb, "sweet_shop.xlsx");
    } catch (error) {
      console.error("Error generating Excel sheet:", error);
    }
  };

  const handleSave = (updatedRow, isSaveClick = false) => {
    //save buffe row data
    if (isSaveClick) saveSweetShopData(updatedRow);
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
        title={"Sweet Shop"}
        saveAllPatientData={saveAllSweetShopData}
        generateAndDownloadExcelSheet={generateAndDownloadExcelSheet}
      />

      {/* card component render if sm view */}
      <div className="md:hidden flex flex-col gap-5 items-center">
        {tableData.map((row, index) => (
          <SweetShopCard key={index} row={row} onSave={handleSave} />
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
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Best Before Date
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
                <SweetShopTable key={index} row={row} onSave={handleSave} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SweetShop;
