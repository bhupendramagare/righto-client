import React from "react";

function SweetShopTable({ initialData }) {
  return (
    <div className="hidden md:block  ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Best Before Date
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Discount/Note
              </th>

              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((row, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {row.PRODUCT_ID}
                </th>

                <td className="px-6 py-4">{row.ITEM_NAME}</td>
                <td className="px-6 py-4">{row.BEST_BEFORE_DATE}</td>
                <td className="px-6 py-4">{row.PRICE}</td>
                <td className="px-6 py-4">{row.DISC_NOTE}</td>

                <td className="px-6 py-4 text-left ">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SweetShopTable;
