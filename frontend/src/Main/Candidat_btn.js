import "../Assets/Main/style/Candidat_btn.css";
import React from "react";

function Candidatbtn({ handleCandidatclick }) {
  const handleClick = () => {
    handleCandidatclick();
  };
  return (
    <button className="Candidat_btn" onClick={handleClick}>
      Candidat
    </button>
  );
}

export default Candidatbtn;
