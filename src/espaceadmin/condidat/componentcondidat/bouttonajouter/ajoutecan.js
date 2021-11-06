import {React}  from 'react';
import {useHistory} from 'react-router-dom';
import '../stylecompocondidat.css'

export default function Ajoutecan ()
{   

        let history=useHistory();

        const handlesubmit = ()=>{   
        var cnom=document.getElementById('ncnom').value;
        var ncprenom=document.getElementById('ncprenom').value;
        var nccin=document.getElementById('nccin').value;
        var ncadresse=document.getElementById('ncadresse').value;
        var ncmail=document.getElementById('ncmail').value;
        var ncnum=document.getElementById('ncnum').value;
        var ncmdp=document.getElementById('ncmdp').value;
        const data={nom:cnom,
                    prenom:ncprenom,
                    cin:nccin,
                    adresse:ncadresse,
                    mail:ncmail,
                    num:ncnum,
                    mdp:ncmdp};
        if(nccin===''){alert('l operation est inccorect !')}
        else{
        fetch('http://localhost:8000/api/candidats', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => {
            response.json();
            
            }) 
            .then(json => {
            console.log(json)
            })
            .catch(err => console.log(err));  }
            history.push('/gcondidat/save') 
             

        }
        return(
            <div className='formnewcandidat'>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nom </td>
                                <td><input type='text' id='ncnom'></input> </td>
                                <td>Prenom </td>
                                <td><input type='text' id='ncprenom'></input> </td>
                            </tr>
                            <tr>
                                <td>CIN </td>
                                <td><input type='text' id='nccin'></input> </td>
                                <td>Adresse</td>
                                <td><input type='text' id='ncadresse'></input> </td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td><input type='email'id='ncmail'></input> </td>
                                <td>Num Tel</td>
                                <td><input type='text' id='ncnum'></input> </td>
                            </tr>
                            <tr>
                            <td >mot de passe</td>
                            <td><input type='text' id='ncmdp'></input> </td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="boo3" onClick={handlesubmit}>confirmer</button>
                </form>
            </div>
        )
    
}
