import React, { useEffect, useId, useState } from "react";
import { format } from "date-fns";
import SelectDiscountLabel from "../../select/SelectDiscountLabel";
import TextInput from "../../inputReadonly/TextInput";

function SweetShopCard({ row, onSave }) {
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

    // Call onSave function with the latest state
    onSave({ ...rowData, [name]: value }, false);
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
            Price
          </label>

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
            <TextInput
              name="PRICE"
              id={unique_price_id}
              value={rowData.PRICE}
            />
          )}
        </div>

        <div>
          <label
            htmlFor={unique_best_before_date_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Best before date
          </label>

          {isEditing ? (
            <input
              type="date"
              name="BEST_BEFORE_DATE"
              id={unique_best_before_date_id}
              value={tempDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
            />
          ) : (
            <TextInput
              name="BEST_BEFORE_DATE"
              id={unique_best_before_date_id}
              value={rowData.BEST_BEFORE_DATE}
            />
          )}
        </div>

        <div>
          <label
            htmlFor={unique_note_id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Disc/Note
          </label>

          {isEditing ? (
            <SelectDiscountLabel
              unique_note_id={unique_note_id}
              value={rowData.DISC_NOTE}
              handleChange={handleChange}
            />
          ) : (
            <TextInput
              name={"DISC_NOTE"}
              id={unique_note_id}
              value={rowData.DISC_NOTE}
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

export default SweetShopCard;
