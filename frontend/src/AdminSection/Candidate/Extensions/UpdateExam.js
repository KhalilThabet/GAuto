import { React } from 'react';
import './stylecompocondidat.css'
import { useHistory } from 'react-router';

export default function UpdateExam({ID}) {
    const History=useHistory();
    const HandleSubmit = () => {
        let Date = document.getElementById('TempDate').value;
        let Time = document.getElementById('TempTime').value;
        let Type = document.getElementById('TempType').value;
        const data = {
            DateExam: Date,
            TimeExam: Time,
            TypeExam: Type
        };
        if(Date===''){alert('Invalid Operation : Date of the next exam is Empty !')}
        else {
        fetch(`http://localhost:8000/api/candidats/examens/${ID}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json());}
        History.push('/gcondidat/save')
    }

    return (
        <div className='formnewcandidat'>
            <form className='formupdateseance' >
                <table >
                    <tbody >
                        <tr>
                            <td>Date :</td>
                            <td><input type='date' id='TempDate' required></input> </td>
                        </tr>
                        <tr>
                            <td>Time :</td>
                            <td><input type='time' id='TempTime' required></input> </td>
                        </tr>
                        <tr>
                            <td>Type Of Exam :</td>
                            <td><select id='TempType'>
                                <option value='code' selected>Code</option>
                                <option value='conduit'>Driving</option>  

                            </select> </td>

                        </tr>
                        <button id='boo3' onClick={HandleSubmit}>Confirm</button>

                    </tbody>
                </table>
            </form>
        </div>
    )

}