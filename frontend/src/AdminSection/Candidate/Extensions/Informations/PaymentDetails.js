import { React } from 'react'
import './stylecompocondidat.css'
import iconplus from './bouttonajouter/icon/plus.png';
import iconmoins from './bouttonajouter/icon/moins.png';
import { useHistory } from 'react-router';
//on pose que le prix de scence code=10dt et de conduit=40dt et pour l examen de code=70dt et conduit=120dt

export default function Paiement({ ident, ncod, ncon, nexcod, nexcon, mp, mrp }) {
    const history = useHistory();
    const NbConduiteMoins = () => {
        fetch(`http://localhost:8000/api/candidats/nbSessionconduit/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbConduite": ncon - 1, "MontantResteAPayer": mrp - 40 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbCodeMoins = () => {
        fetch(`http://localhost:8000/api/candidats/nbSessioncode/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbCode": ncod - 1, "MontantResteAPayer": mrp - 10 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbExamenConduiteMoins = () => {
        fetch(`http://localhost:8000/api/candidats/nbExamconduite/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbExamConduite": nexcon - 1, "MontantResteAPayer": mrp - 120 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbExamenCodeMoins = () => {
        fetch(`http://localhost:8000/api/candidats/nbExamcode/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbExamCode": nexcod - 1, "MontantResteAPayer": mrp - 70 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbConduitePlus = () => {
        fetch(`http://localhost:8000/api/candidats/nbSessionconduit/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbConduite": ncon + 1, "MontantResteAPayer": mrp + 40 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbCodePlus = () => {
        fetch(`http://localhost:8000/api/candidats/nbSessioncode/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbCode": ncod + 1, "MontantResteAPayer": mrp + 10 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbExamenConduitePlus = () => {
        fetch(`http://localhost:8000/api/candidats/nbExamconduite/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbExamConduite": nexcon + 1, "MontantResteAPayer": mrp + 120 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const NbExamenCodePlus = () => {
        fetch(`http://localhost:8000/api/candidats/nbExamcode/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "nbExamCode": nexcod + 1, "MontantResteAPayer": mrp + 70 })
            })
            .then((res) => res.json()); history.push('/gcondidat/save')
    }
    const MontantPayeePlus = () => {
        let argent = document.getElementById('montant').value;
        if(argent===''){alert("l operation est incorrect !")}
        else {
        let ss = parseFloat(argent) + mp
        let dd = mrp - parseFloat(argent)
        fetch(`http://localhost:8000/api/candidats/montantpayee/${ident}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "MontantPayer": ss, "MontantResteAPayer": dd })
            })
            .then((res) => res.json());} history.push('/gcondidat/save')
    }



    return (
        <div>
            <fieldset className='paiementsection'>
                <legend><h1>information de paiement </h1></legend>
                <table>
                    <tbody>
                        <tr>
                            <td>nombre de sience de code :</td>
                            <td>{ncod}</td>
                            <td> <button onClick={NbCodeMoins}><img src={iconmoins} alt="icon moins" id="re" ></img></button></td>
                            <td> <button onClick={NbCodePlus}><img src={iconplus} alt="icon plus" id="re"></img></button></td>

                        </tr>
                        <tr>
                            <td>nombre de sience de conduit :</td>
                            <td>{ncon}</td>
                            <td> <button onClick={NbConduiteMoins}><img src={iconmoins} alt="icon moins"  id="re" ></img></button></td>
                            <td> <button onClick={NbConduitePlus}><img src={iconplus} alt="icon plus" id="re"></img></button></td>
                        </tr>
                        <tr>
                            <td>nombre d'examen code :</td>
                            <td>{nexcod}</td>
                            <td> <button onClick={NbExamenCodeMoins}><img src={iconmoins} alt="icon moins"  id="re" ></img></button></td>
                            <td> <button onClick={NbExamenCodePlus}><img src={iconplus} alt="icon plus" id="re"></img></button></td>
                        </tr>
                        <tr>
                            <td>nombre d'examen conduit :</td>
                            <td>{nexcon}</td>
                            <td> <button onClick={NbExamenConduiteMoins}><img src={iconmoins} alt="icon moins"  id="re" ></img></button></td>
                            <td> <button onClick={NbExamenConduitePlus}><img src={iconplus} alt="icon plus" id="re"></img></button></td>
                        </tr>
                        <tr>
                            <td>le montant payée :</td>
                            <td>{mp}</td>
                            <td><input size="10" type='text' id='montant' placeholder="ajouter montant"></input> </td>
                            <td> <button onClick={MontantPayeePlus}><img src={iconplus} alt="icon plus"  id="re"></img></button></td>
                        </tr>
                        <tr>
                            <td>le montant reste à payée :</td>
                            <td>{mrp}</td>
                        </tr>
                    </tbody>
                </table>

            </fieldset>

        </div>
    )


}
