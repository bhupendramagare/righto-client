import React, { useState } from "react";

function GenerateForm({ setUseCaseData }) {
  const [useCase, setUseCase] = useState("");
  const [currency, setCurrency] = useState("");
  const [tagSize, setTagSize] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [totalTokens, setTotalTokens] = useState("");
  const [displayGenerateForm, setDisplayGenerateForm] = useState(true);

  const tagSizeArray = ["1.54", "2.13", "2.7", "2.9", "3.5", "4.2", "5.8"];
  const tagTypeArray = [
    ["Sweet Shop", "sw"],
    ["Buffet Food", "bf"],
    ["Grocery Store", "gr"],
    ["Patient Data", "pt"],
  ];
  const currencyArray = [
    ["United States Dollar", "$"],
    ["Indian Rupee", "₹"],
    ["Euro", "€"],
    ["Japanese Yen", "¥"],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setUseCaseData({
      useCase,
      currency,
      tagSize,
      identifier,
      totalTokens,
    });

    setDisplayGenerateForm(false);
  };

  return (
    <div className="py-5 mt-5 bg-pink-100 mb-5 rounded-lg ">
      {displayGenerateForm && (
        <>
          <h2 className="  text-xl font-semibold text-gray-900 mb-6 text-center sm:mb-10">
            Use Case Details
          </h2>

          <form className="px-10 max-w-sm mx-auto " onSubmit={handleSubmit}>
            <label
              htmlFor="usecases"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select a use case
            </label>

            <select
              id="usecases"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
            >
              <option value={""} key={-1} disabled>
                Choose a use case
              </option>
              {tagTypeArray.map((type, index) => (
                <option key={index} value={type[1]}>
                  {type[0]}
                </option>
              ))}
            </select>

            {(useCase === "sw" || useCase == "gr") && (
              <>
                <label
                  htmlFor="currency"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select a currency
                </label>

                <select
                  id="currency"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value={""} key={-1} disabled>
                    Choose a currency
                  </option>
                  {currencyArray.map((type, index) => (
                    <option key={index} value={type[1]}>
                      {type[0]}
                    </option>
                  ))}
                </select>
              </>
            )}

            <label
              htmlFor="tagsize"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select a tag size
            </label>

            <select
              id="tagsize"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
              value={tagSize}
              onChange={(e) => setTagSize(e.target.value)}
            >
              <option value={""} key={-1} disabled>
                Choose a tag size
              </option>
              {tagSizeArray.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <label
              htmlFor="identifier"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tag Identifier
            </label>
            <input
              type="number"
              id="identifier"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
              placeholder="tag identifier 0-9"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              max={9}
              maxLength={1}
              min={0}
              minLength={0}
            />

            <label
              htmlFor="totaltokens"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Total Tokens
            </label>
            <input
              type="number"
              id="totaltokens"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
              placeholder="total number of tokens"
              value={totalTokens}
              onChange={(e) => setTotalTokens(e.target.value)}
            />

            <button
              type="submit"
              className="mt-5 text-white bg-green-600 hover:bg-green-700   f font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Generate
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default GenerateForm;
