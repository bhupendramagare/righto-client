import React from "react";

function Navbar() {
  return (
    <div className="h-14 w-full flex bg-yellow-100 justify-between items-center rounded-lg px-5">
      <div className="">
        <img className="w-full h-10" src="./logo.png" alt="logo" />
      </div>
      <div className="bg-green-600 text-sm hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
        <a href="#">Login/Signup</a>
      </div>
    </div>
  );
}

export default Navbar;
