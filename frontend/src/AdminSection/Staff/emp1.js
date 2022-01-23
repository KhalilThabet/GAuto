import { React, useState, useEffect } from 'react';
import './style2.css'
import Pop from './Extensions/popupemp.js'
import Ajouteremp from './Extensions/button ajouteremp/ajouteremp.js';
import Buttonmod from './Extensions/Buttons/button';

export default function Emp1() {
  const [searchteam, setsearchteam] = useState("");
  const [datas, setdatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      fetch("http://localhost:8000/api/employees").then(response =>
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
      <fieldset className='infoemp'>
        <div className='blocrechercheemp'>
          <input type='text' id='rechercheemp' placeholder='Rechercher (Nom)' onChange={event => { setsearchteam(event.target.value) }} />
          <Ajouteremp /> <Buttonmod />
          <br></br>
          <table>
            <tbody>
              <tr>
                <td id='tvempii'> CIN </td>
                <td id='tvempii'> NOM ET PRENOM</td>
                <td id='tvempii'> TELEPHONE </td>
                <td id='tvempii'> POSTE </td>
                <td id='tvempii'> SALAIRE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {datas.filter((val) => {
          return val.nom.toLowerCase().startsWith(searchteam.toLowerCase());
        }).map((val, key) => {
          return (<div key='val.cin' id='listeemp'>
            <Pop cin={val.cin} nom={val.nom} prenom={val.prenom} tel={val.telephone} poste={val.poste} salaire={val.salaire} service={val.service} />

          </div>)
        })}



      </fieldset>
    </div>

  );

}