import { React, useState } from "react";
import Popup from "../Windows/Window";
import UpdateUser from "../UpdateUser";
import Icon from "../../../../Assets/AdminSection/Candidate/icons/modifierinfoperson.png";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";

function UpdateUserBtn({
  CIN,
  LastName,
  FirstName,
  PhoneNumber,
  Adress,
  Password,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>
        <img src={Icon} id="re" alt="icon"></img>
      </button>

      {isOpen && (
        <Popup
          content={
            <>
              <div id="styleformaj">
                <b>Update the candidate's informations</b>
                <p id="st">
                  <UpdateUser
                    CIN={CIN}
                    LastName={LastName}
                    FirstName={FirstName}
                    PhoneNumber={PhoneNumber}
                    Adress={Adress}
                    Password={Password}
                  />
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

export default UpdateUserBtn;
