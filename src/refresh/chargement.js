import React from 'react'
import './chargement.css'
import lod from './loader.gif'
export default function Charge() {
// ce component est le contenu de page de refreshment
 
    return (
        <div className={'Loader'}>
            <h1 id='loadtext'>Patientez </h1>
            <img src={lod} alt='chargement' id='loadgif'></img>


        </div>
    )
}