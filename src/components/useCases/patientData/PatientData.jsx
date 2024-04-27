import React, { useEffect, useState } from "react";
import PatientDataCard from "./PatientDataCard";
import PatientDataTable from "./PatientDataTable";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { saveData, saveAllData, getAll } from "../../../services/api";

import * as XLSX from "xlsx";

function PatientData({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const savePatientDate = async (data) => {
    try {
      const response = await saveData(data);
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

  const saveAllPatientDate = async () => {
    try {
      const response = await saveAllData(tableData);
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

  const getAllPatientsData = async () => {
    try {
      // const response = await getAll();
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(tableData);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "Patients");

      // Write the workbook to a file
      XLSX.writeFile(wb, "patients.xlsx");
    } catch (error) {
      console.error("Error saving data:", error);
      console.log(response); //console log erro from server
    }
  };

  const handleSave = async (updatedRow) => {
    //save data
    savePatientDate(updatedRow);
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
      <div>
        <h4 className="  text-2xl font-bold text-center mb-5">Patient Data</h4>
        <div className=" mb-5 flex gap-2 justify-end pr-5">
          <button
            onClick={saveAllPatientDate}
            className="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-1 px-2 border border-green-600 hover:border-transparent rounded"
          >
            Save All
          </button>
          <button
            onClick={getAllPatientsData}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* card component render if sm view */}
      <div className="md:hidden flex flex-col gap-5 items-center">
        {tableData.map((row, index) => (
          <PatientDataCard key={index} row={row} onSave={handleSave} />
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
                  Age, Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Consulting Dr.
                </th>
                <th scope="col" className="px-6 py-3">
                  Admitted Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Procedure
                </th>
                <th scope="col" className="px-6 py-3">
                  Mode of Payment
                </th>

                <th scope="col" className=" px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <PatientDataTable key={index} row={row} onSave={handleSave} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PatientData;
