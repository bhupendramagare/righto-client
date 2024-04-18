import React from "react";

function SweetShopCard({ initialData }) {
  return (
    <div className="md:hidden flex flex-col gap-5 items-center">
      {initialData.map((row, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
        >
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900">Item Details</h5>

            <div>
              <label
                htmlFor="productid"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Product id
              </label>

              <input
                type="text"
                name="PRODUCT_ID"
                id="productid"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="eg. JS1001"
                value={row.PRODUCT_ID}
                readOnly
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>

              <input
                type="text"
                name="ITEM_NAME"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="eg. JS1001"
                value={row.ITEM_NAME}
                readOnly
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Price
              </label>

              <input
                type="text"
                name="PRICE"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="eg. JS1001"
                value={row.PRICE}
                readOnly
              />
            </div>

            <div>
              <label
                htmlFor="bestdate"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Best before date
              </label>

              <input
                type="text"
                name="BEST_BEFORE_DATE"
                id="bestdate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="eg. JS1001"
                value={row.BEST_BEFORE_DATE}
                readOnly
              />
            </div>

            <div>
              <label
                htmlFor="note"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Disc/Note
              </label>

              <input
                type="text"
                name="DISC_NOTE"
                id="note"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="eg. JS1001"
                value={row.DISC_NOTE}
                readOnly
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Edit
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default SweetShopCard;
