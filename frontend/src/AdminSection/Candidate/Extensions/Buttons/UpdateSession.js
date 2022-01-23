import {React,useState } from 'react';
import Popup from '../bouttonajouter/popup.js';
import Updateseance from './updateseance';
import iconmodifier from './mod.png';
import '../stylecompocondidat.css'

/* le code css de button est ecrit dans stylecompocondidat.css
 dans un bloc special a partir de ligne 49 */


 
function Buttonupdateseance({cin1}) {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <button onClick={togglePopup} ><img src={iconmodifier} id="re" alt="icon" ></img></button>
    
    {isOpen && <Popup
      content={<>
      <div id='styleformaj'>
        <b>saisir la prochaine seance </b>
        <p id='st' ><Updateseance idp={cin1} /></p>
        </div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Buttonupdateseance;