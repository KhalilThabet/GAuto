import { React, useState, useEffect } from 'react';
import './stylecondidat.css';
import Paiement from './Extensions/Informations/PaymentDetails.js';
import Infopersonnel from './Extensions/info_pesonnel';
import Prochainescience from './Extensions/SessionPredictor';
import Prochaineexamen from './Extensions/Predictors/ExamPredictor';
import Buttonajouter from './Extensions/bouttonajouter/buttonajouter.js.js.js';
import im from './photo.png'

export default function Condidat() {
    const [searchteam, setsearchteam] = useState("");
    const [id1, setid1] = useState('');
    const [id2, setid2] = useState('');
    const [id3, setid3] = useState('');
    const [id4, setid4] = useState('');
    const [id5, setid5] = useState('');
    const [id6, setid6] = useState('');
    const [id7, setid7] = useState('');
    const [id8, setid8] = useState('');
    const [id9, setid9] = useState('');
    const [id10, setid10] = useState('');
    const [id11, setid11] = useState('');
    const [id12, setid12] = useState('');
    const [id13, setid13] = useState('');
    const [id14, setid14] = useState('');
    const [id15, setid15] = useState('');
    const [id16, setid16] = useState('');
    const [id17, setid17] = useState('');
    const [id18, setid18] = useState('');
    const [datas, setdatas] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (!isLoaded) {
            fetch("http://localhost:8000/api/candidats").then(response =>
                response.json()
            )
                .then(data => {
                    setIsLoaded(true)
                    setdatas(data)
                })
                .catch(err => {
                    console.log(err)
                })

        }
    })
    return (
        <div>
            <fieldset className='bodyinfocond' style={{ backgroundImage: `url(${im})` }} >

                <Paiement ident={id1} ncod={id7} ncon={id8} nexcod={id9} nexcon={id10} mp={id11} mrp={id12} />

                <Prochainescience cin={id1} date={id13} heure={id14} type={id15} />
                <Prochaineexamen cin={id1} date={id16} heure={id17} type={id18} />
                <Infopersonnel cin={id1} nom={id2} prenom={id3} num={id4} ad={id5} mdp={id6} />
            </fieldset>
            <fieldset className='infocond'>

                <div className='blocrecherchecond'>
                    <input type='text' id='recherchecond' placeholder='Rechercher (Nom)' onChange={event => { setsearchteam(event.target.value); }} />

                    <Buttonajouter />

                </div>

                {datas.filter((val) => {
                    return val.nom.toLowerCase().startsWith(searchteam.toLowerCase());
                }).map((val, key) => {
                    return (<div key='val.cin' id='listecond'>
                        <table>
                            <tbody>
                                <tr>
                                    <button id='tvcond' onClick={(e) => {
                                        setid1(val.cin)
                                        setid2(val.nom)
                                        setid3(val.prenom)
                                        setid4(val.num)
                                        setid5(val.adresse)
                                        setid6(val.mdp)
                                        setid7(val.nbCode)
                                        setid8(val.nbConduite)
                                        setid9(val.nbExamCode)
                                        setid10(val.nbExamConduite)
                                        setid11(val.MontantPayer)
                                        setid12(val.MontantResteAPayer)
                                        setid13(val.dateSession)
                                        setid14(val.heureSession)
                                        setid15(val.typeSession)
                                        setid16(val.dateExam)
                                        setid17(val.heureExam)
                                        setid18(val.typeExam)
                                    }}   >

                                        {val.nom} {val.prenom}

                                    </button>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                })}
            </fieldset>




        </div>

    )

}
