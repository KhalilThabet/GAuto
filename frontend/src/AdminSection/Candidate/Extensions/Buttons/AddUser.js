import { React, useState } from "react";
import Popup from "../Windows/Window";
import AddUser from "../AddUser";
import Icon from "../../../../Assets/AdminSection/Candidate/icons/plus.png";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";

function AddBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} id="plus">
        <img src={Icon} id="re" alt="icon"></img>
      </button>

      {isOpen && (
        <Popup
          content={
            <>
              <div id="styleformaj">
                <b>Candidate's Informations</b>
                <p id="st">
                  <AddUser />
                </p>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default AddBtn;
