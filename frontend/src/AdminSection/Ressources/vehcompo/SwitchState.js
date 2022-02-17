import React from "react";
import "../../../Assets/AdminSection/Ressources/StyleRessources.css";

function SwitchState({ isOn, handleToggle }) {
  return (
    <>
      <input
        checked={isOn}
        onClick={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}

export default SwitchState;
