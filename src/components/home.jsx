import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "./confetti";

export default function Home() {
  const navigate = useNavigate();
  const backaudio = new Audio("/homebackground.mp3");

  useEffect(() => {
    setTimeout(() => backaudio.play(), 500);
  }, []);
  useEffect(() => {
    return () => {
      backaudio.pause();
    };
  }, []);
  return (
    <div>
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
        className="absolute transition duration-400 transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold rounded-xl border-black"
        style={{
          top: "35vw",
          right: "3vw",
          width: "20%",
          "font-size": "2vw",
          borderWidth: "0.2vw",
          padding: "1vw",
        }}
        onClick={() => navigate("/game1")}
      >
        San Game
      </button>
      <button
        className="absolute transition duration-400 transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold rounded-xl border-black"
        style={{
          top: "41vw",
          right: "3vw",
          width: "20%",
          "font-size": "2vw",
          borderWidth: "0.2vw",
          padding: "1vw",
        }}
        onClick={() => navigate("/game2")}
      >
        San Game 2
      </button>
    </div>
  );
}
