import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import GenerateForm from "./components/generateForm/GenerateForm";
import EditDetails from "./components/editDetails/EditDetails";

function App() {
  const [useCaseData, setUseCaseData] = useState({
    useCase: "0",
    currency: "0",
    tagSize: "0",
    identifier: "0",
    totalTokens: "0",
  });

  return (
    <div className=" px-5 py-2 sm:px-10 bg-white ">
      <Navbar />
      <GenerateForm setUseCaseData={setUseCaseData} />
      <EditDetails {...useCaseData} />
    </div>
  );
}

export default App;
