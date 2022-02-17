import { React, useState } from "react";
import Popup from "../Windows/Window.js";
import Icon from "../../../../Assets/AdminSection/Candidate/icons/mod.png";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";
import UpdateExam from "../UpdateExam.js";

function UpdateExamBtn({ CIN }) {
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
                <b>Log the next Exam </b>
                <p id="st">
                  <UpdateExam ID={CIN} />
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

export default UpdateExamBtn;
