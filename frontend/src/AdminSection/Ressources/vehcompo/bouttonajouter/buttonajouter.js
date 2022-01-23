import {React,useState } from 'react';
import Popup from './popup.js';
import Ajouteveh from './ajouteveh';
import iconplus from './icon/plus.png';
import '../style/stylecompocondidat.css'
/* le code css de button est ecrit dans stylecompocondidat.css
 dans un bloc special a partir de ligne 49 */


 
function Buttonajouter() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <button onClick={togglePopup} id='plus'><img src={iconplus} id="re" alt='rechercher'></img></button>
    
    {isOpen && <Popup
      content={<>
      <div id='styleformaj'>
        <b>les informations du vehicule</b>
        <p id='st' ><Ajouteveh/></p>
        </div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Buttonajouter;