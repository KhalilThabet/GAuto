import {React,useState } from 'react';
import Popup from '../Windows/Window.js';
import iconmodifier from '../icons/mod.png';
import '../stylecompocondidat.css'
import UpdateExam from '../UpdateExam.js';

 
function UpdateExamBtn({CIN}) {
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
        <p id='st' ><UpdateExam ID={CIN} /></p>
       </div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default UpdateExamBtn;