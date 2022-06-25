import React, { ReactElement, useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

export default function WonLoseModal({ showModal, setShowModal, increment }) {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      zIndex: 999,
    },
    content: {
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0px",
      border: "0px",
      backgroundColor: "transparent",
      zIndex: 999,
    },
  };

  return (
    <Modal isOpen={showModal} style={customStyles} ariaHideApp={false}>
      <>
        <div className="flex-shrink justify-center  items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
          <div
            style={{ width: "40vw", right: "2vw", top: "3vw" }}
            className="absolute my-6  mx-auto"
          >
            <div
              className="absolute z-50 top-6 right-6 cursor-pointer"
              style={{ top: "1.5vw", right: "1.5vw", "font-size": "1.5vw" }}
              onClick={() => setShowModal(false)}
            >
              <ImCross className="transform hover:scale-110 hover:text-amber-700" />
            </div>
            {increment === 0.5 ? (
              <div
                className="border-2  rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none"
                style={{ padding: "1vw" }}
              >
                <div
                  className="fontPotta text-red-400"
                  style={{ "font-size": "2.5vw" }}
                >
                  I Love You Too, San !!!
                </div>
                <div
                  className="fontPotta"
                  style={{ "font-size": "1.2vw", marginTop: "1vw" }}
                >
                  You became a light to my world when i was in trouble. You are
                  like a mother to me, sister to me throghtout this past years.
                  I am very happy to have a girl like you. I wish your all
                  dreams come true. Let us cross this tough times together until
                  we find inner piece. No matter how hard our path is. Be with
                  me to continue our journey. I love you....
                </div>
                <img src="/both.png" width="50%" alt="both" />
              </div>
            ) : (
              <div
                className="border-2  rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none"
                style={{ padding: "1vw "}}
              >
                <div
                  className="fontPotta text-orange-400"
                  style={{ "font-size": "2.5vw" }}
                >
                  Try & Try. Oneday what?
                </div>
                <div
                  className="fontPotta"
                  style={{ "font-size": "1.2vw", marginTop: "1vw" }}
                >
                  Oneday you can fly. Lose is the best teacher of your life.If
                  you don't try, you can't fail. If you do try, you might fail
                  anyway. But better to have failed than never tried.
                </div>
                <img src="/both-seperate.png" width="100%" alt="both" />
              </div>
            )}
          </div>
        </div>
      </>
    </Modal>
  );
}
