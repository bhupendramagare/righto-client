import React from "react";

function EditDetailsHeader({
  title,
  saveAllPatientData,
  generateAndDownloadExcelSheet,
}) {
  return (
    <div>
      <h4 className="  text-2xl font-bold text-center mb-5">{title}</h4>
      <div className=" mb-5 flex gap-2 justify-end pr-5">
        <button
          onClick={saveAllPatientData}
          className="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-1 px-2 border border-green-600 hover:border-transparent rounded"
        >
          Save All
        </button>
        <button
          onClick={generateAndDownloadExcelSheet}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Export Excel
        </button>
      </div>
    </div>
  );
}

export default EditDetailsHeader;
