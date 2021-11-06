import {React,useState } from 'react';
import Popup from '../bouttonajouter/popup.js';
import iconmodifier from './mod.png';
import '../stylecompocondidat.css'
import Updateexamen from './updateexamen.js';
/* le code css de button est ecrit dans stylecompocondidat.css
 dans un bloc special a partir de ligne 49 */


 
function Buttonupdateexamen({cin3}) {
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
        <p id='st' ><Updateexamen ide={cin3} /></p>
       </div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Buttonupdateexamen;