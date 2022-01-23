import { React } from 'react';
import '../stylecompocondidat.css'
import { useHistory } from 'react-router';

export default function Updatecan({ cin1, nom1, prenom1, num1, ad1, mdp1 }) {
    const history=useHistory();

    const handlesubmit = () => {
        let cnom = document.getElementById('cnom').value;
        let ncprenom = document.getElementById('cprenom').value;
        let nccin = document.getElementById('ccin').value;
        let ncadresse = document.getElementById('cadresse').value;
        let ncmail = document.getElementById('cmail').value;
        let ncnum = document.getElementById('cnum').value;
        let ncmdp = document.getElementById('cmdp').value;
        if(cin1===''){alert("l operation est inccorrect !")}
        else {
        if (cnom === '') cnom = nom1;
        if (ncprenom ==='') ncprenom = prenom1;
        if (nccin === '') nccin = cin1;
        if (ncadresse === '') ncadresse = ad1;
        if (ncnum === '') ncnum = num1;
        if (ncmdp === '') ncmdp = mdp1;
        const data = {
            nom: cnom,
            prenom: ncprenom,
            cin: nccin,
            adresse: ncadresse,
            mail: ncmail,
            num: ncnum,
            mdp: ncmdp
        };

        fetch(`http://localhost:8000/api/candidats/${cin1}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json());}

        history.push('/gcondidat/save')
    }

    const handleDelete = () => {
        if(cin1===''){alert('l operation est inccorect !')}
        else{
        alert('le condidat' + nom1 + ' ' + prenom1 + ' est supprimer')
        fetch(`http://localhost:8000/api/candidats/${cin1}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json());}
        history.push('/gcondidat/save')
    }
    return (
        <div className='formnewcandidat'>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom </td>
                            <td><input type='text' id='cnom' placeholder={nom1}  ></input> </td>
                            <td>Prenom </td>
                            <td><input type='text' id='cprenom' placeholder={prenom1} ></input> </td>
                        </tr>
                        <tr>
                            <td>CIN </td>
                            <td><input type='text' id='ccin' placeholder={cin1}></input> </td>
                            <td>Adresse</td>
                            <td><input type='text' id='cadresse' placeholder={ad1} ></input></td>
                        </tr>
                        <tr>
                            <td>Mail</td>
                            <td><input type='text' id='cmail' ></input> </td>
                            <td>Num Tel</td>
                            <td><input type='text' id='cnum' placeholder={num1} ></input> </td>
                        </tr>
                        <tr>
                            <td >Mot de passe</td>
                            <td><input type='text' id='cmdp' placeholder={mdp1}></input> </td>
                        </tr>
                        <button id='boo3' onClick={handlesubmit} >confirmer</button>
                        <button id='boo3' onClick={handleDelete}>supprimer</button>
                    </tbody>
                </table>
            </form>
        </div>
    )

}
