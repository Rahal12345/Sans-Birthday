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
    if (distance >= 48 || distance < -25) {
      setPaused(true);
      clearInterval(id);
      setShowModal(true);
      distance < -25 ? lose.play() : victory.play();
    }
  }, [distance]);

  return (
    <div>
      {distance >= 48 && <Confetti />}
      <img src="2.jpg" width="100%" />
      <img
        className="absolute top-0 left-0 2xl:left-7 2xl:top-6 w-96 2xl:w-auto"
        src="/rahal.png"
        alt="rahal"
      />
      <img
        className="absolute bottom-0 left-0 w-48 2xl:w-auto"
        src="/rahalname.png"
        alt="rahalname"
      />
      <img
        className={`absolute top-4 w-96 2xl:w-auto`}
        style={{ right: `${distance}%` }}
        src="/san.png"
        alt="san"
      />
      <img
        className={`absolute bottom-0 w-48 2xl:w-auto`}
        style={{ right: `${distance + 5}%` }}
        src="/sanname.png"
        alt="sanname"
      />
      {distance >= 48 && (
        <img
          className="absolute top-80 left-64 2xl:top-96 2xl:left-80"
          src="/heart-image2.gif"
          width="15%"
          alt="heart"
        />
      )}
      <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold text-3xl rounded-xl  p-1 border-2 border-black"
        style={{ top: "3%", left: 5 }}
        onClick={() => navigate("/")}
      >
        <IoArrowBackCircleSharp />
      </button>
      <button
        className="absolute transform hover:scale-110 bg-yellow-200 hover:bg-yellow-400 text-black font-semibold text-3xl rounded-xl  p-1 border-2 border-black"
        style={{ top: "3%", left: 50 }}
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
        className={`absolute transform ${!paused && "hover:scale-110"} ${
          distance % 2 === 0 ? "bg-yellow-200" : "bg-yellow-400"
        } text-black font-semibold text-3xl rounded-xl  p-2 px-4 border-2 border-black`}
        style={{ top: "3%", right: 50 }}
        onClick={() => {
          setDistance((prev) => prev + increment);
          clkaudio.play();
        }}
        disabled={paused}
      >
        Love you
      </button>
      {distance < 48 && distance > -25 && (
        <button
          className={`absolute transform hover:scale-110 ${
            paused ? "bg-yellow-200" : "bg-yellow-400"
          } text-black font-semibold text-3xl rounded-xl  p-2 px-4 border-2 border-black`}
          style={{ bottom: "3%", right: 50 }}
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
