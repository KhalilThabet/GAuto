import React from 'react';
import './style/switchetat.css';

function Switchetat ({ isOn, handleToggle })  {
  return (
    <>
      <input
        checked={isOn}
        onClick={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switchetat ;
