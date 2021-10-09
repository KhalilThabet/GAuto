import React from 'react';
import '../../style2.css'
import { useHistory } from 'react-router';

export default function Formajouter() {
    const history=useHistory();
    const handleempajoute = () => {
        var enom = document.getElementById('empnom').value;
        var eprenom = document.getElementById('empprenom').value;
        var ecin = document.getElementById('empcin').value;
        var eposte = document.getElementById('empposte').value;
        var esalaire = document.getElementById('empsalaire').value;
        var etel = document.getElementById('emptel').value;
        var eservice = document.getElementById('empservice').value;
        const data = {
            nom: enom,
            prenom: eprenom,
            cin: ecin,
            salaire: esalaire,
            poste: eposte,
            telephone: etel,
            service: eservice
        };
        if(ecin===''){alert('l operation est inccorect !')}
        else{
        fetch('http://localhost:8000/api/employees', {
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
            .catch(err => console.log(err));history.push('/employe/save') }

    }


    return (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom :</td>
                            <td><input size="10" type='text' id='empnom' required></input> </td>
                        </tr>
                        <tr>
                            <td>Prenom :</td>
                            <td><input size="10" type='text' id='empprenom' placeholder="" required></input> </td>
                        </tr>
                        <tr>
                            <td>CIN :</td>
                            <td><input size="10" type='text' id='empcin' placeholder="" required></input> </td>
                        </tr>
                        <tr>
                            <td>TEL :</td>
                            <td><input size="10" type='text' id='emptel' placeholder="" required></input> </td>
                        </tr>
                        <tr>
                            <td>Poste :</td>
                            <td><input size="10" type='text' id='empposte' required></input> </td>
                        </tr>
                        <tr>
                            <td>Salaire :</td>
                            <td><input size="10" type='text' id='empsalaire' placeholder="" required></input> </td>
                        </tr>
                        <tr>
                            <td>en service :</td>
                            <td><select id='empservice'><option value='hors service'>hors service</option><option value='en service' selected>en service</option> </select> </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <button id='bott' onClick={handleempajoute}>ajouter</button>
        </div>
    )
}