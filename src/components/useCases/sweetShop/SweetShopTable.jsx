import React, { useEffect, useState } from "react";
import { format } from "date-fns";

function SweetShopTable({ row, onSave }) {
  const [rowData, setRowData] = useState(row);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDate, setTempDate] = useState(""); // Formats the date as "yyyy-MM-dd"

  const options = [
    "ORGANIC",
    "NOSUGAR",
    "DESIGHEE",
    "VEGAN",
    "PUREVEG",
    "EGGLESS",
    "EGG",
    "NONVEG",
  ];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(rowData);
    setIsEditing(false);
  };

  useEffect(() => {
    const dateInitial = new Date();
    const formattedDateInitial = dateInitial.toISOString().split("T")[0]; // Formats the date as "yyyy-MM-dd"
    setTempDate(formattedDateInitial);
  }, []); // this use effect only for date.

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "BEST_BEFORE_DATE") {
      // the default format saved in tempDate to show change in editing mode
      setTempDate(value);
      let parsedDate = new Date(value);
      let formatted = format(parsedDate, "dd MMM yy");
      value = formatted.toUpperCase();
    }

    setRowData({
      ...rowData,
      [name]: value,
    });
  };
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {isEditing ? (
          <input
            type="text"
            name="PRODUCT_ID"
            id="productid"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.PRODUCT_ID}
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            name="PRODUCT_ID"
            id="productid"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.PRODUCT_ID}
            readOnly
          />
        )}
      </th>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="ITEM_NAME"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.ITEM_NAME}
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            name="ITEM_NAME"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.ITEM_NAME}
            readOnly
          />
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="PRICE"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.PRICE}
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            name="PRICE"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.PRICE}
            readOnly
          />
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="date"
            name="BEST_BEFORE_DATE"
            id="bestdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={tempDate}
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            name="BEST_BEFORE_DATE"
            id="bestdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.BEST_BEFORE_DATE}
            readOnly
          />
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          // <input
          //   type="text"
          //   name="DISC_NOTE"
          //   id="note"
          //   onChange={handleChange}

          //   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          //   placeholder="eg. JS1001"
          //   value={rowData.DISC_NOTE}

          // />

          <select
            name="DISC_NOTE"
            id="note"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={""} key={-1} disabled>
              Choose a label
            </option>

            {options.map((option, index) => (
              <option key={index} value={`${option}`}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            name="DISC_NOTE"
            id="note"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.DISC_NOTE}
            readOnly
          />
        )}
      </td>

      <td className="px-6 py-4 text-left ">
        {!isEditing ? (
          <button
            className="w-full text-white bg-blue-600 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleEdit}
          >
            Edit
          </button>
        ) : (
          <button
            className="w-full text-white bg-green-600 hover:bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </td>
    </tr>
  );
}

export default SweetShopTable;
