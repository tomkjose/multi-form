import React from "react";
import { Link } from "react-router-dom";

function Fof() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-6xl">404</h1>
      <button className="bg-buttonBg  text-white border rounded-lg px-8 py-2 font-bold transition duration-300 ease-in-out">
        <Link to="/" className="text-inherit">
          {" "}
          Home
        </Link>
      </button>
    </div>
  );
}

export default Fof;
