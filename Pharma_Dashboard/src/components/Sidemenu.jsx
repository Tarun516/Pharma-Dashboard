import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsDatabase } from "react-icons/bs";
import { IoFunnelOutline } from "react-icons/io5";
import { HiBuildingStorefront } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineEyeDropper } from "react-icons/hi2";
import { TbCashBanknote } from "react-icons/tb";

export default function Sidemenu() {
  const [activeCard, setActiveCard] = useState(null);

  function handleCardClick(cardId) {
    setActiveCard(activeCard === cardId ? null : cardId);
  }
  return (
    <div className="flex-col items-center w-[11%] text-gray-500 bg-slate-100">
      <div className="p-1 mx-1">
        <span>Dashboards</span>
        <div className="mt-3 ml-2">
          <button
            className={`card-button ${
              activeCard === "patients" ? "active" : ""
            } px-10 py-2 shadow-md font-bold flex-col items-baseline`}
            onClick={() => handleCardClick("patients")}
          >
            <HiOutlineUserCircle className="mx-4 size-7" />
            Patients
          </button>
        </div>

        <div className="mt-2 ml-2">
          <button
            className={`card-button ${
              activeCard === "hr" ? "active" : ""
            } px-11 py-2 shadow-md font-bold flex-col`}
            onClick={() => handleCardClick("hr")}
          >
            <BsDatabase className="mx-3 size-7" />
            HR
          </button>
        </div>

        <div className="mt-2 ml-2">
          <button
            className={`card-button ${
              activeCard === "labs" ? "active" : ""
            } px-11 py-2 shadow-md font-bold flex-col`}
            onClick={() => handleCardClick("labs")}
          >
            <IoFunnelOutline className="mx-3 size-7" />
            Labs
          </button>
        </div>

        <div className="mt-2 ml-2">
          <button
            className={`card-button ${
              activeCard === "pharma" ? "active" : ""
            } px-10 py-2 shadow-md font-bold flex-col`}
            onClick={() => handleCardClick("pharma")}
          >
            <HiBuildingStorefront className="mx-3 size-7" />
            Pharma
          </button>
        </div>
      </div>

      <div className="p-1 mx-1">
        <span className>Processes</span>
        <div className="mt-3 ml-2">
          <button
            className={`card-button ${
              activeCard === "registration" ? "active" : ""
            } px-6 py-2 shadow-md font-bold`}
            onClick={() => handleCardClick("registration")}
          >
            <IoNewspaperOutline className="mx-8 size-7" />
            Registration
          </button>
        </div>

        <div className="mt-2 ml-2">
          <button
            className={`card-button ${
              activeCard === "consultation" ? "active" : ""
            } px-6 py-2 shadow-md font-bold flex-col`}
            onClick={() => handleCardClick("consultation")}
          >
            <IoDocumentTextOutline className="mx-8 size-7" />
            Consultation
          </button>
        </div>

        <div className="mt-2 ml-2">
          <button
            className={`card-button ${
              activeCard === "testreport" ? "active" : ""
            } px-6 py-3 shadow-md font-bold flex-col text-xs`}
            onClick={() => handleCardClick("testreport")}
          >
            <HiOutlineEyeDropper className="mx-8 size-7" />
            <span>Tests & Reports</span>
          </button>
        </div>

        <div className="mt-2 ml-2">
          <button
            className={`card-button ${
              activeCard === "billing" ? "active" : ""
            } px-6 py-2 shadow-md font-bold flex-col`}
            onClick={() => handleCardClick("billing")}
          >
            <TbCashBanknote className="mx-8 size-7" />
            Billing
          </button>
        </div>
      </div>
    </div>
  );
}
