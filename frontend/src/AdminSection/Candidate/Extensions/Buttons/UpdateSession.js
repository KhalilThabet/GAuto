import { React, useState } from "react";
import Popup from "../Windows/Window.js";
import UpdateSession from "../UpdateSession";
import Icon from "../../../../Assets/AdminSection/Candidate/icons/mod.png";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";

function UpdateSessionBtn({ CIN }) {
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
                <b>Log the next session </b>
                <p id="st">
                  <UpdateSession ID={CIN} />
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

export default UpdateSessionBtn;
