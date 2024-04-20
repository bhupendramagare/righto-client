import React, { useEffect, useId, useState } from "react";
import { format } from "date-fns";
import SelectDiscountLabel from "../../select/SelectDiscountLabel";
import TextInput from "../../inputReadonly/TextInput";
import SelectModeOfPayment from "../../select/SelectModeOfPayment";

function PatientDataCard({ row, onSave }) {
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
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <div className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900">Item Details</h5>

        <div>
          <label
            htmlFor={unique_product_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product id
          </label>
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
        </div>

        <div>
          <label
            htmlFor={unique_name_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>

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
              />

              <TextInput
                name="ITEM_NAME2"
                id={unique_name_id + 1}
                value={rowData.ITEM_NAME2}
              />
            </>
          )}
        </div>

        <div>
          <label
            htmlFor={unique_price_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Age, Gender
          </label>

          {isEditing ? (
            <>
              <input
                type="number"
                name="AGE"
                id={unique_price_id}
                className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="patient age"
                value={rowData.AGE}
                onChange={handleChange}
                min={0}
                minLength={0}
              />
              <input
                type="text"
                name="GENDER"
                id={unique_price_id + 1}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="patient gender M/F"
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
                className={"mb-3"}
                name="AGE"
                id={unique_price_id}
                value={rowData.AGE}
              />
              <TextInput
                name="GENDER"
                id={unique_price_id + 1}
                value={rowData.GENDER}
              />
            </>
          )}
        </div>

        <div>
          <label
            htmlFor={unique_price_id + 2}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Consulting Dr
          </label>

          {isEditing ? (
            <input
              type="text"
              name="CONSULTING_DR"
              id={unique_price_id + 2}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="patient consulting Dr."
              value={rowData.CONSULTING_DR}
              onChange={handleChange}
            />
          ) : (
            <TextInput
              name="CONSULTING_DR"
              id={unique_price_id + 2}
              value={rowData.CONSULTING_DR}
            />
          )}
        </div>

        <div>
          <label
            htmlFor={unique_best_before_date_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Admitted Date
          </label>

          {isEditing ? (
            <input
              type="date"
              name="ADMITTED_DATE"
              id={unique_best_before_date_id}
              value={tempDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
            />
          ) : (
            <TextInput
              name="ADMITTED_DATE"
              id={unique_best_before_date_id}
              value={rowData.ADMITTED_DATE}
            />
          )}
        </div>

        <div>
          <label
            htmlFor={unique_best_before_date_id + "procedure"}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Procedure
          </label>

          {isEditing ? (
            <input
              type="text"
              name="PROCEDURE"
              id={unique_best_before_date_id + "procedure"}
              value={rowData.PROCEDURE}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
              placeholder="procedure"
            />
          ) : (
            <TextInput
              name="PROCEDURE"
              id={unique_best_before_date_id + "procedure"}
              value={rowData.PROCEDURE}
            />
          )}
        </div>

        <div>
          <label
            htmlFor={unique_note_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mode of Payment
          </label>

          {isEditing ? (
            <SelectModeOfPayment
              unique_note_id={unique_note_id}
              value={rowData.MODE_OF_PAYMENT}
              handleChange={handleChange}
            />
          ) : (
            <TextInput
              name={"MODE_OF_PAYMENT"}
              id={unique_note_id}
              value={rowData.MODE_OF_PAYMENT}
            />
          )}
        </div>

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
      </div>
    </div>
  );
}

export default PatientDataCard;
