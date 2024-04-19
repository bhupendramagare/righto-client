import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import SelectDiscountLabel from "../../select/SelectDiscountLabel";
import TextInput from "../../inputReadonly/TextInput";

function SweetShopCard({ row, onSave }) {
  const [rowData, setRowData] = useState(row);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDate, setTempDate] = useState(""); // Formats the date as "yyyy-MM-dd"

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
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <div className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900">Item Details</h5>

        <div>
          <label
            htmlFor="productid"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product id
          </label>
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
            <TextInput
              name="PRODUCT_ID"
              id="productid"
              value={rowData.PRODUCT_ID}
            />
          )}
        </div>

        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>

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
            <TextInput name="ITEM_NAME" id="name" value={rowData.ITEM_NAME} />
          )}
        </div>

        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>

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
            <TextInput name="PRICE" id="price" value={rowData.PRICE} />
          )}
        </div>

        <div>
          <label
            htmlFor="bestdate"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Best before date
          </label>

          {isEditing ? (
            <input
              type="date"
              name="BEST_BEFORE_DATE"
              id="bestdate"
              value={tempDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
            />
          ) : (
            <TextInput
              name="BEST_BEFORE_DATE"
              id="bestdate"
              value={rowData.BEST_BEFORE_DATE}
            />
          )}
        </div>

        <div>
          <label
            htmlFor="note"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Disc/Note
          </label>

          {isEditing ? (
            <SelectDiscountLabel handleChange={handleChange} />
          ) : (
            <TextInput
              name={"DISC_NOTE"}
              id={"note"}
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
