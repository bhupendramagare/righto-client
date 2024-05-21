import React, { useEffect, useId, useState } from "react";
import { format } from "date-fns";
import TextInput from "../../inputReadonly/TextInput";
import SelectModeOfPayment from "../../select/SelectModeOfPayment";

function PatientDataTable({ row, onSave }) {
  const [rowData, setRowData] = useState(row);
  const [isEditing, setIsEditing] = useState(true);
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
    onSave(rowData, true);
    setIsEditing(false);
  };

  useEffect(() => {
    const dateInitial = new Date();
    const formattedDateInitial = dateInitial.toISOString().split("T")[0]; // Formats the date as "yyyy-MM-dd"
    setTempDate(formattedDateInitial);
  }, []); // this use effect only for date.

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "ADMITTED_DATE") {
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

    // Call onSave function with the latest state
    onSave({ ...rowData, [name]: value }, false);
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
            placeholder="product id"
          />
        )}
      </th>

      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="ITEM_NAME1"
              id={unique_name_id}
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="max 17 characters"
              value={rowData.ITEM_NAME1}
              onChange={handleChange}
              maxLength={17}
            />

            <input
              type="text"
              name="ITEM_NAME2"
              id={unique_name_id + 1}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="max 17 characters"
              value={rowData.ITEM_NAME2}
              onChange={handleChange}
              maxLength={17}
            />
          </>
        ) : (
          <>
            <TextInput
              name="ITEM_NAME1"
              id={unique_name_id}
              value={rowData.ITEM_NAME1}
              className={"mb-3"}
              placeholder="patient's name"
            />

            <TextInput
              name="ITEM_NAME2"
              id={unique_name_id + 1}
              value={rowData.ITEM_NAME2}
              placeholder="patient's name"
            />
          </>
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <>
            <input
              type="text"
              name="AGE"
              id={unique_name_id + "age"}
              className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="patient's age"
              value={rowData.AGE}
              onChange={handleChange}
              maxLength={17}
              min={0}
              minLength={0}
            />

            <input
              type="text"
              name="GENDER"
              id={unique_name_id + "gender"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="patient's gender"
              value={rowData.GENDER}
              onChange={handleChange}
              min={0}
              minLength={0}
              max={1}
              maxLength={1}
              onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
            />
          </>
        ) : (
          <>
            <TextInput
              name="AGE"
              id={unique_name_id + "age"}
              value={rowData.AGE}
              className={"mb-3"}
              placeholder="patient's age"
            />

            <TextInput
              name="GENDER"
              id={unique_name_id + "gender"}
              value={rowData.GENDER}
              placeholder="patient's gender"
            />
          </>
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="CONSULTING_DR"
            id={unique_price_id + "consultingdr"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="patient consulting dr"
            value={rowData.CONSULTING_DR}
            onChange={handleChange}
          />
        ) : (
          <TextInput
            name="CONSULTING_DR"
            id={unique_price_id + "consultingdr"}
            value={rowData.CONSULTING_DR}
            placeholder="patient's consulting dr"
          />
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="date"
            name="ADMITTED_DATE"
            id={unique_best_before_date_id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="admit date"
            value={tempDate}
            onChange={handleChange}
          />
        ) : (
          <TextInput
            name="ADMITTED_DATE"
            id={unique_best_before_date_id}
            value={rowData.ADMITTED_DATE}
            placeholder="patient's admit date"
          />
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <input
            type="text"
            name="PROCEDURE"
            id={unique_best_before_date_id + "procedure"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="procedure"
            value={rowData.PROCEDURE}
            onChange={handleChange}
          />
        ) : (
          <TextInput
            name="PROCEDURE"
            id={unique_best_before_date_id + "procedure"}
            value={rowData.PROCEDURE}
            placeholder="procedure"
          />
        )}
      </td>

      <td className="px-6 py-4">
        {isEditing ? (
          <SelectModeOfPayment
            unique_note_id={unique_note_id}
            value={rowData.MODE_OF_PAYMENT}
            handleChange={handleChange}
          />
        ) : (
          <TextInput
            name="MODE_OF_PAYMENT"
            id={unique_note_id}
            value={rowData.MODE_OF_PAYMENT}
            placeholder="mode of payment"
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

export default PatientDataTable;
