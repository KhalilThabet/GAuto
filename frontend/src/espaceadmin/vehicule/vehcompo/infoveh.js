import { React } from 'react'
import './style/styleinfoveh.css'
import iconmodifier from './icon/mod.png'
import Switchetat from './switchetat';
import { useHistory } from 'react-router';


export default function Infoveh({ imm, modele, marque, vignette, visite, assurence, vidange,
    filtre, freinage, pneues, courroies, service, nbCheveau }) {
    const history = useHistory();
    const handelassurance = () => {
        let newdate = document.getElementById('assurance').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/assurance/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "assurance": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }
    const handelvignette = () => {
        let newdate = document.getElementById('vignette').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/vignette/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "vignette": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }
    const handelvisite = () => {
        let newdate = document.getElementById('visite').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/visite/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "visiteTechnique": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')

    }
    const handelvidange = () => {
        let newdate = document.getElementById('vidange').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/vidange/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "vidange": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }
    const handelpneues = () => {
        let newdate = document.getElementById('pneues').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/pneues/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "pneues": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }
    const handelfreinage = () => {
        let newdate = document.getElementById('freinage').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/freinage/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "freinage": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }
    const handelfiltre = () => {
        let newdate = document.getElementById('filtre').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/filtre/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "filtre": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }
    const handelcourroies = () => {
        let newdate = document.getElementById('courroies').value;
        if (newdate === '') alert('operation inccorecrt !')
        else {
            fetch(`http://localhost:8000/api/vehicules/courroies/${imm}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "courroies": newdate })
                })
            .then((res) => res.json());
        } history.push('/vehicule/save')
    }




    const handelservice = () => {
        let newdata=!service;
        if(imm===''){alert("l operation est incorrect !")}
        else {
        fetch(`http://localhost:8000/api/vehicules/service/${imm}`,
        {method: 'PUT',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({"service":newdata}) })
        .then((res)=>res.json());
        if(!newdata){alert("la vehicule "+marque+" met en service")}
        else{alert("la vehicule "+marque+" est hors service")}
        history.push('/vehicule/save');}
    }



    return (
        <div >
            <fieldset className='vehicule'>
                <legend><h1>{marque}</h1></legend>
                <table>
                    <tbody>
                        <tr>
                            <td  >Imatricule :</td>
                            <td id='imm' >{imm}</td>
                        </tr>
                        <tr>
                            <td >Modele :</td>
                            <td id='modele'>{modele}</td>
                        </tr>
                        <tr>
                            <td>Nombre de cheveau : </td>
                            <td id='ndch'>{nbCheveau}</td>
                        </tr>
                        <tr>
                            <td>En service :</td>
                            <td>oui</td>
                            <td><Switchetat isOn={service} handleToiconmodifierle={handelservice} /> </td>
                            <td>non</td>
                        </tr>
                    </tbody>
                </table>

            </fieldset>

            <fieldset className='papier'>

                <table>
                    <tbody>
                        <tr>
                            <td><p style={{ color: "rgba(9, 8, 22, 0.904)" }} >Papiers du véhicule</p> </td>
                        </tr>
                        <tr>
                            <td>validité vignette :</td>
                            <td >{vignette} </td>
                            <td><input size="10" type='date' id='vignette' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelvignette}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td>validité assurence :</td>
                            <td  >{assurence}</td>
                            <td><input size="10" type='date' id='assurance' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelassurance}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td>validité visite technique :</td>
                            <td >{visite}</td>
                            <td><input size="10" type='date' id='visite' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelvisite}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td><p style={{ color: "rgba(9, 8, 22, 0.904)" }} >Les entretiens quotidien</p> </td>
                        </tr>
                        <tr>
                            <td>vidange :</td>
                            <td >{vidange}</td>
                            <td><input size="10" type='date' id='vidange' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelvidange}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td>changement des filtres:</td>
                            <td >{filtre}</td>
                            <td><input size="10" type='date' id='filtre'></input> </td>
                            <td> <button onClick={handelfiltre}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td>éléments de freinage :</td>
                            <td >{freinage}</td>
                            <td><input size="10" type='date' id='freinage' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelfreinage}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td>les pneus:</td>
                            <td >{pneues}</td>
                            <td><input size="10" type='date' id='pneues' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelpneues}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                        <tr>
                            <td>les différentes courroies:</td>
                            <td>{courroies}</td>
                            <td><input size="10" type='date' id='courroies' placeholder="modifier date"></input> </td>
                            <td> <button onClick={handelcourroies}><img src={iconmodifier} id="re" alt="icon"></img></button></td>
                        </tr>
                    </tbody>
                </table>

            </fieldset>
            {/*<fieldset id='fieldimagevoi'><img src={voi} id='voi'></img></fieldset>*/}



        </div>
    )


}