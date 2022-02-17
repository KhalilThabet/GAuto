import React from "react";
import "../../../../Assets/AdminSection/Candidate/Window.css";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="boxcandidat">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
