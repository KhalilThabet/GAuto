import { React } from 'react';
import Charge from './chargement.js';
import { useHistory } from 'react-router';

//on utilise cette fonction pour faire un mise a jour pour le base de donnees
//on fait un redirection apres 2 seconds
export default function Refreshveh() {
const history=useHistory();
setTimeout(() => {
    history.push('/vehicule')
}, 2500);

    return (
        <div >
            <Charge />
  
        </div>
    )

}