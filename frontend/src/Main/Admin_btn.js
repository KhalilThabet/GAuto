import "../Assets/Main/style/Admin_btn.css";
import React from "react";

function Adminbtn({ handleAdminclick }) {
  const handleClick = () => {
    handleAdminclick();
  };

  return (
    <button className="Admin_btn" onClick={handleClick}>
      Admin
    </button>
  );
}

export default Adminbtn;
