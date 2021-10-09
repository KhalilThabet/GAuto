import { React } from 'react';
import { useHistory } from 'react-router';
import Charge from './chargement.js';

//on utilise cette fonction pour faire un mise a jour pour le base de donnees
//on fait un redirection apres 2 seconds
export default function Refreshemp() {
const history=useHistory();
setTimeout(() => {
    history.push('/employe')
}, 2000);

    return (
        <div >
            <Charge />
  
        </div>
    )

}