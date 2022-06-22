import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "./confetti";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Confetti />
      <img
        className="absolute top-0"
        src="/cake2.jpg"
        width="100%"
        alt="backgroundimage"
      />
      <div className=" bg-black opacity-50 h-16 lg:h-16 2xl:h-28 relative "></div>
      <div className="absolute top-0 pt-2 pb-6 text-white fontPotta left-12 lg:left-36 2xl:left-60 text-4xl lg:text-5xl 2xl:text-6xl ">
        😘🥳🥳Happy Birth Day San🎂🎂😘
      </div>
      <img
        className="absolute top-24"
        src="/1.png"
        width="40%"
        alt="backgroundimage"
      />
      <img
        className="absolute top-24 right-4"
        src="/11.jpg"
        width="24%"
        alt="backgroundimage"
      />
      <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold text-3xl rounded-xl  p-2 px-4 border-2 border-black"
        style={{ top: "70%", right: 100 }}
        onClick={() => navigate("/game1")}
      >
        Game One
      </button>
      <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold text-3xl rounded-xl  p-2 px-4 border-2 border-black"
        style={{ top: "83%", right: 100 }}
        onClick={() => navigate("/game2")}
      >
        Game Two
      </button>
    </div>
  );
}
