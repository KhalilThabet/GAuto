import { React} from 'react';
import '../stylecompocondidat.css'
import { useHistory } from 'react-router';

export default function Updateseance({idp}) {
    const history = useHistory();
    const handlesubmit = () => {
        let date = document.getElementById('ncdate').value;
        let time = document.getElementById('nctime').value;
        let type = document.getElementById('nctype').value;
        const data = {
            dateSession: date,
            heureSession: time,
            typeSession: type
        };
        if(date===''){alert('la date de seance prochain est vide')}
        else {
        fetch(`http://localhost:8000/api/candidats/session/${idp}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json());} history.push('/gcondidat/save')
    }
    return (
        <div className='formnewcandidat'>
            <form className='formupdateseance' >
                <table >
                    <tbody >
                        <tr>
                            <td>date </td>
                            <td><input type='date' id='ncdate' required></input> </td>
                        </tr>
                        <tr>
                            <td>heure</td>
                            <td><input type='time' id='nctime' required></input> </td>
                        </tr>
                        <tr>
                            <td>type de seance </td>
                            <td><select id='nctype'>
                                <option name='code' value='code' selected>Code</option>
                                <option name='conduit' value='conduit'>Conduit</option>
                            </select>
                            </td>

                        </tr>
                        <button id='boo3' onClick={handlesubmit}>confirmer</button>

                    </tbody>
                </table>
            </form>
        </div>
    )

}
