import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiFillPauseCircle } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";
import Confetti from "./confetti";
import WonLoseModal from "./wonLoseModal";

export default function GameOne() {
  const navigate = useNavigate();

  const [distance, setDistance] = useState(0);
  const [paused, setPaused] = useState(true);
  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const increment = distance < 36 ? 1 : 0.5;
  const backaudio = new Audio("/game1background.mp3");
  const clkaudio = new Audio("/click.mp3");
  const victory = new Audio("/victory.mp3");
  const lose = new Audio("/lose.mp3");

  const Timer = () => {
    if (paused) {
      setId(
        setInterval(() => {
          setDistance((prev) => prev - 1);
        }, 700)
      );
    } else {
      clearInterval(id);
    }
  };
  useEffect(() => {
    backaudio.play();
  }, []);

  useEffect(() => {
    return () => {
      backaudio.pause();
    };
  }, []);

  useEffect(() => {
    if (distance >= 49 || distance < -25) {
      setPaused(true);
      clearInterval(id);
      setShowModal(true);
      distance < -25 ? lose.play() : victory.play();
    }
  }, [distance]);

  return (
    <div>
      {distance >= 49 && <Confetti />}
      <img src="2.jpg" width="100%" />
      <img
        className="absolute"
        style={{ height: "45vw", top: "2vw", left: "1vw" }}
        src="/rahal.png"
        alt="rahal"
      />
      <img
        className="absolute"
        style={{ height: "4vw", top: "42vw", left: "2vw" }}
        src="/rahalname.png"
        alt="rahalname"
      />
      <img
        className={`absolute`}
        style={{ right: `${distance}%`, top: "3vw", height: "42vw" }}
        src="/san.png"
        alt="san"
      />
      <img
        className={`absolute`}
        style={{ right: `${distance + 5}%`, top: "42vw", height: "4vw" }}
        src="/sanname.png"
        alt="sanname"
      />
      {distance >= 49 && (
        <img
          className="absolute"
          style={{ top: "22vw", left: "19vw" }}
          src="/Heart-image2.gif"
          width="15%"
          alt="heart"
        />
      )}
      <button
        className="absolute transition duration-400 transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold rounded-xl border-black"
        style={{
          top: "1vw",
          left: "1vw",
          "font-size": "3vw",
          padding: "0.2vw",
          borderWidth: "0.2vw",
        }}
        onClick={() => navigate("/")}
      >
        <IoArrowBackCircleSharp />
      </button>
      <button
        className="absolute transition duration-400 transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold rounded-xl border-black"
        style={{
          top: "1vw",
          left: "6vw",
          "font-size": "3vw",
          padding: "0.2vw",
          borderWidth: "0.2vw",
        }}
        onClick={() => {
          setDistance(0);
          setPaused(true);
          clearInterval(id);
          setId();
        }}
      >
        <ImLoop2 />
      </button>
      <button
        className={`absolute transition duration-400 transform ${!paused && "hover:scale-110"} ${
          distance % 2 === 0 ? "bg-yellow-200" : "bg-yellow-400"
        } text-black font-semibold rounded-xl border-black`}
        style={{
          top: "1vw",
          right: "1vw",
          "font-size": "2.5vw",
          borderWidth: "0.2vw",
          width: "13vw",
        }}
        onClick={() => {
          setDistance((prev) => prev + increment);
          clkaudio.play();
        }}
        disabled={paused}
      >
        Love You
      </button>
      {distance < 49 && distance >= -25 && (
        <button
          className={`absolute transition duration-400 transform hover:scale-110 ${
            paused ? "bg-yellow-200" : "bg-yellow-400"
          } text-black font-semibold rounded-xl border-black`}
          style={{
            top: "40vw",
            right: "1vw",
            "font-size": "2.5vw",
            borderWidth: "0.2vw",
            padding: "0.7vw",
          }}
          onClick={() => {
            Timer();
            setPaused(!paused);
          }}
        >
          {!id ? (
            "Start"
          ) : paused ? (
            <BsPlayCircleFill />
          ) : (
            <AiFillPauseCircle />
          )}
        </button>
      )}
      <WonLoseModal
        showModal={showModal}
        setShowModal={setShowModal}
        increment={increment}
      />
    </div>
  );
}
