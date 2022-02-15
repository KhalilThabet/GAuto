import React from "react";
import "../style/popupveh.css";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="boxveh">
        <span className="close-iconveh" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
