import * as XLSX from "xlsx";

const getAllPatientsData = (tableData) => {
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
