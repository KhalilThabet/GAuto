import { React } from 'react';
import '../stylecompocondidat.css'
import { useHistory } from 'react-router';

export default function Updateexamen({ide}) {
    const history=useHistory();
    const handlesubmit = () => {
        let date = document.getElementById('exdate').value;
        let time = document.getElementById('exheure').value;
        let type = document.getElementById('extype').value;
        const data = {
            dateExam: date,
            heureExam: time,
            typeExam: type
        };
        if(date===''){alert('la date d examen prochaine est vide')}
        else {
        fetch(`http://localhost:8000/api/candidats/examens/${ide}`,
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

    return (
        <div className='formnewcandidat'>
            <form className='formupdateseance' >
                <table >
                    <tbody >
                        <tr>
                            <td>date </td>
                            <td><input type='date' id='exdate' required></input> </td>
                        </tr>
                        <tr>
                            <td>heure</td>
                            <td><input type='time' id='exheure' required></input> </td>
                        </tr>
                        <tr>
                            <td>type d'examen </td>
                            <td><select id='extype'>
                                <option value='code' selected>Code</option>
                                <option value='conduit'>Conduit</option>  

                            </select> </td>

                        </tr>
                        <button id='boo3' onClick={handlesubmit}>confirmer</button>

                    </tbody>
                </table>
            </form>
        </div>
    )

}