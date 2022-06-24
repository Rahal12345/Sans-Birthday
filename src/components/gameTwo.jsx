import React from "react";
import { useNavigate } from "react-router-dom";

export default function GameTwo() {
  const navigate = useNavigate();
  return (
    <div>
      <img src="2.jpg" width="100%" />
      <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold text-3xl rounded-xl  p-2 px-4 border-2 border-black"
        style={{ top: "3%", right: 50 }}
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}
