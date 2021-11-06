import React from 'react';
import '../style2.css'
import iconmodifier from './icon/modifier.png'
import { useHistory } from 'react-router';

export default function Infoemp({ idemp, nomemp, prenomemp, posteemp, telemp, salaireemp, serviceemp }) {
    const history=useHistory();
    const handleDelete = () => {
        alert('employee ' + nomemp + ' ' + prenomemp + ' est supprimer')
        fetch(`http://localhost:8000/api/employees/${idemp}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json());history.push('/employe/save') 

    }

    const handelnom = () => {
        let newdate = document.getElementById('nomemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/nom/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "nom": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }
    }
    const handelprenom = () => {
        let newdate = document.getElementById('prenomemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/prenom/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "prenom": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }

    }
    const handelcin = () => {
        let newdate = document.getElementById('cinemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/cin/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "cin": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }
    }
    const handelposte = () => {
        let newdate = document.getElementById('posteemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/poste/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "poste": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }
    }
    const handelsalaire = () => {
        let newdate = document.getElementById('salaireemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/salaire/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "salaire": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }
    }
    const handeltelephone = () => {
        let newdate = document.getElementById('telemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/telephone/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "telephone": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }
    }
    const handelservice = () => {
        let newdate = document.getElementById('serviceemp').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/employees/service/${idemp}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "service": newdate })
                })
            .then((res) => res.json());history.push('/employe/save') 
        }
    }



    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Nom :</td>
                        <td>{nomemp}</td>
                        <td><input size="10" type='text' id='nomemp'></input> </td>
                        <td> <button onClick={handelnom}><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                    <tr>
                        <td>Prenom :</td>
                        <td>{prenomemp}</td>
                        <td><input size="10" type='text' id='prenomemp' placeholder=""></input> </td>
                        <td> <button onClick={handelprenom}><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                    <tr>
                        <td>CIN :</td>
                        <td>{idemp}</td>
                        <td><input size="10" type='text' id='cinemp' placeholder=""></input> </td>
                        <td> <button onClick={handelcin}><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                    <tr>
                        <td>TEL :</td>
                        <td>{telemp}</td>
                        <td><input size="10" type='text' id='telemp' placeholder=""></input> </td>
                        <td> <button onClick={handeltelephone}><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                    <tr>
                        <td>Poste :</td>
                        <td>{posteemp}</td>
                        <td><input size="10" type='text' id='posteemp'></input> </td>
                        <td> <button onClick={handelposte}><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                    <tr>
                        <td>Salaire :</td>
                        <td>{salaireemp}</td>
                        <td><input size="10" type='text' id='salaireemp' placeholder=""></input> </td>
                        <td> <button onClick={handelsalaire} ><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                    <tr>
                        <td>en service :</td>
                        <td>{serviceemp}</td>
                        <td><select id='serviceemp'><option value='hors service'>hors service</option><option value='en service' selected>en service</option> </select> </td>
                        <td> <button onClick={handelservice} ><img src={iconmodifier} alt="icon" id="re"></img></button></td>
                    </tr>
                </tbody>
            </table>
            <button id='bott' onClick={handleDelete}>supprimer</button>
        </div>
    )
}