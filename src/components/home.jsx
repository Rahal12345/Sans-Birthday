import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "./confetti";

export default function Home() {
  const navigate = useNavigate();
  const backaudio = new Audio("/homebackground.mp3");

  useEffect(() => {
    backaudio.play();
  }, [backaudio]);
  useEffect(() => {
    return () => {
      backaudio.pause();
    };
  }, [backaudio]);
  return (
    <div className="">
      <Confetti />
      <img
        className="absolute top-0"
        src="/cake2.jpg"
        width="100%"
        alt="backgroundimage"
      />
      <div
        className="relative bg-black opacity-50"
        style={{ height: "8vw" }}
      ></div>
      <div
        className="absolute text-white fontPotta top-0  left-12 lg:left-36 2xl:left-60"
        style={{ "font-size": "4vw" }}
      >
        😘🥳🥳Happy Birth Day San🎂🎂😘
      </div>
      <img
        className="absolute"
        src="/1.png"
        width="40%"
        alt="backgroundimage"
      />
      <img
        className="absolute"
        style={{ top: "9vw", right: "3vw" }}
        src="/11.jpg"
        width="24%"
        alt="backgroundimage"
      />
      <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold rounded-xl  p-2 px-4 border-2 border-black"
        style={{ top: "40vw", right: "3vw", width: "20%", "font-size": "2vw" }}
        onClick={() => navigate("/game1")}
      >
        San Game
      </button>
      {/* <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold text-3xl rounded-xl  p-2 px-4 border-2 border-black"
        style={{ top: "83%", right: 100 }}
        onClick={() => navigate("/game2")}
      >
        Game Two
      </button> */}
    </div>
  );
}
