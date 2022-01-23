import { React} from 'react';
import '../style/stylecompocondidat.css'
import { useHistory } from 'react-router';

export default function Ajouteveh() {
    const history=useHistory();
    const handlesubmit = () => {

        var immatricule = document.getElementById('immatricule').value;
        var marque = document.getElementById('marque').value;
        var modele = document.getElementById('model').value;
        var cheveau = document.getElementById('cheveau').value;
        const data = {
            immatricule : immatricule,
            modele: modele,
            nbCheveau : cheveau,
            marque : marque
        };
        if ( immatricule===""){alert("l operation est inccorect !");}
        else{
        fetch('http://localhost:8000/api/vehicules', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                response.json();

            })
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err));
         }history.push('/vehicule/save');
    }

    return (
        <div className='formupdateveh'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Immatricule </td>
                            <td><input type='text' id='immatricule'></input> </td>
                            <td>Modele </td>
                            <td><input type='text' id='model'></input> </td>
                        </tr>
                        <tr>
                            <td>Marque </td>
                            <td><input type='text' id='marque'></input> </td>

                        </tr>
                        <tr>
                            <td>N° de cheveau </td>
                            <td><input type='text' id='cheveau'></input> </td>

                        </tr>

                    </tbody>
                </table>
                <button id='boo3' onClick={handlesubmit} >confirmer</button>
            </form>
        </div>
    )

}
