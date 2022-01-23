import React,{useEffect,useState} from 'react';
import '../../style2.css'
import { useHistory } from 'react-router';

export default function Formajouter() {
    const History=useHistory();
    const [isLoaded, setIsLoaded] = useState(false);
    const[id1,setid1]=useState('');
    const[id2,setid2]=useState('');
    const[id3,setid3]=useState('');
    const[id4,setid4]=useState('');
    useEffect(() => {
        if (!isLoaded) {
            fetch("http://localhost:8000/api/items/accdir").then(response =>
                response.json()
            )
                .then(data => {
                    setIsLoaded(true)
                    setid1(data.CIN)
                    setid2(data.Password)
                })
                .catch(err => {
                    console.log(err)
                })
                fetch("http://localhost:8000/api/items/accemp").then(response =>
                response.json()
            )
                .then(data => {
                    setIsLoaded(true)
                    setid3(data.CIN);
                    setid4(data.Password);
                })
                .catch(err => {
                    console.log(err)
                })

        }
        
    })
    const handlemoddir = () => {
        var euser = document.getElementById('user').value;
        var epassword = document.getElementById('passwd').value;
        const data = {
            cin: euser,
            password: epassword,
        };
        if(euser===''){alert('l operation est inccorect !')}
        else{
        fetch(`http://localhost:8000/api/items/dir`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                response.json();

            })
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err));History.push('/employe/save') }

    }
    const handlemodemp = () => {
        var empuser = document.getElementById('useremp').value;
        var emppassword = document.getElementById('passwdemp').value;
        const data = {
            CIN: empuser,
            Password: emppassword,
        };
        if(empuser===''){alert('l operation est inccorect !')}
        else{
        fetch(`http://localhost:8000/api/items/emp`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                response.json();

            })
            .then(json => {
                console.log(json)
            })
            .catch(err => console.log(err));History.push('/employe/save') }

    }


    return (
        <div>
            <form>
                <h1>Admin</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>CIN :</td>
                            <td>{id1}</td>
                            <td><input size="10" type='text' id='user' required></input> </td>
                            <td rowSpan={2}><button id='bott'onClick={handlemoddir} >Modify</button></td>
                            
                        </tr>
                        <tr>
                            <td>Password :</td>
                            <td>{id2}</td>
                            <td><input size="10" type='text' id='passwd' placeholder="" required></input> </td>
                        </tr>
                        
                    </tbody>
                </table>
                </form>
                <form>
                <h1>Employee</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>CIN :</td>
                            <td>{id3}</td>
                            <td><input size="10" type='text' id='useremp' required></input> </td>
                            <td rowSpan={2}><button id='bott' onClick={handlemodemp}>Modify</button></td>
                        </tr>
                        <tr>
                            <td>Password :</td>
                            <td>{id4}</td>
                            <td><input size="10" type='text' id='passwdemp' placeholder="" required></input> </td>
                        </tr>
                        
                    </tbody>
                </table>
            </form>

        </div>
    )
}