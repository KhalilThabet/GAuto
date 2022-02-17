import { React, useState } from "react";
import Popup from "./popup.js";
import AddVehicule from "../AddVehicule";
import iconplus from "../../../../Assets/AdminSection/Ressources/icon/plus.png";
import "../../../../Assets/AdminSection/Ressources/StyleRessources.css";
/* le code css de button est ecrit dans stylecompocondidat.css
 dans un bloc special a partir de ligne 49 */

function AddBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} id="plus">
        <img src={iconplus} id="re" alt="rechercher"></img>
      </button>

      {isOpen && (
        <Popup
          content={
            <>
              <div id="styleformaj">
                <b>Vehicule's Informations</b>
                <p id="st">
                  <AddVehicule />
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
