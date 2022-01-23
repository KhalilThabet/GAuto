import { React, useEffect,useState } from 'react';
import './style.css';
import Prochainesciencecond from './bodyinfo/SessionPredictor';
import Prochaineexamencond from './bodyinfo/ExamPredictor';
import Infopersonnelcond from './bodyinfo/PersonnelDetails';
import Paiementcond from './bodyinfo/PayementDetails';
import logo from './Items/mo2.png'

import im from './Items/moi.png'
export default function Informations({PersonnelCIN}) {


    const [save,setSave]=useState({});
    const [isLoaded,setIsLoaded] = useState(false) 
    const [id1,setid1]=useState('');   const [id2,setid2]=useState('');
    const [id3,setid3]=useState('');   const [id4,setid4]=useState('');   
    const [id5,setid5]=useState('');   const [id6,setid6]=useState('');
    const [id7,setid7]=useState('');   const [id8,setid8]=useState('');
    const [id9,setid9]=useState('');   const [id10,setid10]=useState(''); 
    const [id11,setid11]=useState(''); const [id12,setid12]=useState('');
    const [id13,setid13]=useState(''); const [id14,setid14]=useState('');
    const [id15,setid15]=useState(''); const [id16,setid16]=useState('');
    const [id17,setid17]=useState(''); const [id18,setid18]=useState('');
     
    useEffect(() => {
        if (!isLoaded) {
            fetch(`http://localhost:8000/api/candidats/${PersonnelCIN}`).then(response =>
                response.json()
            )
                .then(data => {
                    setIsLoaded(true)
                    setSave(data)
                })
                .catch(err => {
                    console.log(err)
                })

        };
   
        setid1(save.cin)
        setid2(save.nom)
        setid3(save.prenom)
        setid4(save.num)
        setid5(save.adresse)
        setid6(save.mdp)
        setid7(save.nbCode)
        setid8(save.nbConduite)
        setid9(save.nbExamCode)
        setid10(save.nbExamConduite)
        setid11(save.MontantPayer)
        setid12(save.MontantResteAPayer)
        setid13(save.dateSession)
        setid14(save.heureSession)
        setid15(save.typeSession)
        setid16(save.dateExam)
        setid17(save.heureExam)
        setid18(save.typeExam)
    },[isLoaded, save.cin, save.nom, save.prenom, save.num, save.adresse, save.mdp, save.nbCode, save.nbConduite, save.nbExamCode, save.nbExamConduite, save.MontantPayer, save.MontantResteAPayer, save.dateSession, save.heureSession, save.typeSession, save.dateExam, save.heureExam, save.typeExam, PersonnelCIN] )

   
    return (

        <div >
            <fieldset style={{ backgroundImage: `url(${im})` }} className='bodyinfoespacecond'>
                <img src={logo} id="logoencentre" alt="logo"></img>
                <Paiementcond ncod={id7} ncon={id8} nexcod={id9} nexcon={id10} mp={id11} mrp={id12} />
                <Infopersonnelcond  cin={id1} nom={id2} prenom ={id3} num={id4} ad={id5}  mdp={id6} />

                <Prochaineexamencond date={id16} heure={id17} type={id18} />
                <Prochainesciencecond date={id13}  heure={id14}  type={id15} />



            </fieldset>

        </div>

    )

}
