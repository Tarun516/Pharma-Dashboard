import React, { useState } from "react";


function Sidemenu() {
  const [activeCard, setActiveCard] = useState(null);

  function handleCardClick(cardId) {
    setActiveCard(activeCard === cardId ? null : cardId);
  }

  return (
    <>
      <div className="bg-slate-50 text-slate-400 w-48 py-3 px-2 flex-col justify-evenly">
        <span>Dashboards</span>
        <div className="mt-4 ml-4">
          <button
            className={`card-button ${
              activeCard === "patients" ? "active" : ""
            } py-2 px-5`}
            onClick={() => handleCardClick("patients")}
          >
            <img src="./public/images.png" alt="" className="rounded-full size-12 bg-center" />
            Patients
          </button>
        </div>
        <div className="mt-2 ml-4">
          <button
            className={`card-button ${
              activeCard === "hr" ? "active" : ""
            } py-2 px-5`}
            onClick={() => handleCardClick("hr")}
          >
            <img src="./public/HR.png" alt="" className="rounded-full size-12 bg-center" />
            HR
          </button>
        </div>
        <div className="mt-2 ml-4">
          <button
            className={`card-button ${
              activeCard === "labs" ? "active" : ""
            } py-2 px-5`}
            onClick={() => handleCardClick("labs")}
          >
            <img src="E:\Dashboard\Intern-Page\src\assets\images.png" alt="" />
            Labs
          </button>
        </div>
        <div className="mt-2 ml-4">
          <button
            className={`card-button ${
              activeCard === "pharma" ? "active" : ""
            } py-2 px-5 `}
            onClick={() => handleCardClick("pharma")}
          >
            <img src="./001-home.png" alt="" className="rounded-full size-12 bg-center" />
            Pharma
          </button>
        </div>

        <div className="mt-8">
          <span>Processes</span>
          <div className="mt-4 ml-4">
            <button
              className={`card-button ${
                activeCard === "Registration" ? "active" : ""
              } py-2 px-5`}
              onClick={() => handleCardClick("Registration")}
            >
              <img src="E:/Dashboard/Intern-Page/src/assets/images.png" alt="" />
              Registration
            </button>
          </div>
          <div className="mt-2 ml-4">
            <button
              className={`card-button ${
                activeCard === "Consultation" ? "active" : ""
              } py-2 px-5`}
              onClick={() => handleCardClick("Consultation")}
            >
              <img src="E:/Dashboard/Intern-Page/src/assets/images.png" alt="" />
              Consultation
            </button>
          </div>
          <div className="mt-2 ml-4">
            <button
              className={`card-button ${
                activeCard === "Tests & Reports" ? "active" : ""
              } py-2 px-5`}
              onClick={() => handleCardClick("Tests & Reports")}
            >
              <img src="E:/Dashboard/Intern-Page/src/assets/images.png" alt="" />
              Tests & Reports
            </button>
          </div>
          <div className="mt-2 ml-4">
            <button
              className={`card-button ${
                activeCard === "Billing" ? "active" : ""
              } py-2 px-5`}
              onClick={() => handleCardClick("Billing")}
            >
              <img src="E:/Dashboard/Intern-Page/src/assets/images.png" alt="" />
              Billing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
