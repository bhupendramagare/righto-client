import React, { useEffect, useState } from "react";
import PatientDataCard from "./PatientDataCard";
import PatientDataTable from "./PatientDataTable";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PatientData({ initialData }) {
  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    setTableData(initialData);
  }, [initialData]);

  const handleSave = (updatedRow) => {
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
    //

    //save to database

    console.log(updatedRow);

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
        <h4 className="text-2xl font-bold text-center mb-10">Patient Data</h4>
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
