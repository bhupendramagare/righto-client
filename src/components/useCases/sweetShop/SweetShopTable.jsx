import React, { useEffect, useId, useState } from "react";
import { format } from "date-fns";
import SelectDiscountLabel from "../../select/SelectDiscountLabel";
import TextInput from "../../inputReadonly/TextInput";

function SweetShopTable({ row, onSave }) {
  const [rowData, setRowData] = useState(row);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDate, setTempDate] = useState(""); // Formats the date as "yyyy-MM-dd"

  //uniqu id's for input label id attributes
  const unique_product_id = useId();
  const unique_name_id = useId();
  const unique_price_id = useId();
  const unique_best_before_date_id = useId();
  const unique_note_id = useId();

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
            id={unique_product_id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.PRODUCT_ID}
            onChange={handleChange}
          />
        ) : (
          <TextInput
            name="PRODUCT_ID"
            id={unique_product_id}
            value={rowData.PRODUCT_ID}
          />
        )}
      </th>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="ITEM_NAME"
            id={unique_name_id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Prodct name"
            value={rowData.ITEM_NAME}
            onChange={handleChange}
          />
        ) : (
          <TextInput
            name="ITEM_NAME"
            id={unique_name_id}
            value={rowData.ITEM_NAME}
          />
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="PRICE"
            id={unique_price_id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={rowData.PRICE}
            onChange={handleChange}
          />
        ) : (
          <TextInput name="PRICE" id={unique_price_id} value={rowData.PRICE} />
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="date"
            name="BEST_BEFORE_DATE"
            id={unique_best_before_date_id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="eg. JS1001"
            value={tempDate}
            onChange={handleChange}
          />
        ) : (
          <TextInput
            name="BEST_BEFORE_DATE"
            id={unique_best_before_date_id}
            value={rowData.BEST_BEFORE_DATE}
          />
        )}
      </td>
      <td className="px-6 py-4">
        {isEditing ? (
          <SelectDiscountLabel
            unique_note_id={unique_note_id}
            value={rowData.DISC_NOTE}
            handleChange={handleChange}
          />
        ) : (
          <TextInput
            name="DISC_NOTE"
            id={unique_note_id}
            value={rowData.DISC_NOTE}
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
