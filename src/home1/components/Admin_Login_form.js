import React, { useState,useEffect } from 'react';
import '../style/Login_form.css';
import {useHistory ,Redirect} from 'react-router-dom';

function AdminLoginform ({isShowAdminLogin,fonctionadmin}) {
  const [save,setSave]=useState({});
  let history=useHistory();
  const [isLoaded,setIsLoaded] = useState(false)

	useEffect(()=>{
		if(!isLoaded){
			fetch("http://localhost:8000/api/items").then(response=>
				response.json()
				)
			.then(data=>{
				setIsLoaded(true)
				setSave(data)
				})
			.catch(err=>{
				console.log(err)
			})
		
		}
    })

 const handlverification =()=>{
    let x=document.getElementById('u1').value;
    let y=document.getElementById('p1').value;
    let trouveemp=false;
    let trouvedir=false;
    save.map((val,key)=>{
      if(val.cin===x&&val.password===y&&val.poste==="emp"){trouveemp=true;}
      if(val.cin===x&&val.password===y&&val.poste==="admin"){trouvedir=true;}
      return(true)
    })
    if(trouveemp){ fonctionadmin();history.push('/emp');}
    else if(trouvedir){ fonctionadmin();history.push('/admin');}
    else {alert('L’CIN ou le mot de passe que vous avez saisi(e) n’est pas associé(e) à un compte') ;
      return (<Redirect to='/'/>)}
    }


  return (
    <div className={`${isShowAdminLogin ? "active" : ""}show`}>
      <div className="login-form"> 
        <div className ="form_box_solid">
          <form className='form' >
            <h1 className="login-text">Admin</h1>
            <label>CIN</label><br></br>
            <input
            type = "text"
            name = "Username"
            className= "login-box" id='u1'
            /> <br></br>
            <label>Mot De Passe</label><br></br>
            <input
            type = "password"
            name = "Password"
            className= "login-box" id='p1'
            /> <br></br>
            <button  className="login-btn"  onClick={handlverification}>Connecter</button>
          </form>
        </div>
      </div> 
    
    </div>
   
  
    

  );
   
   
 
}

export default AdminLoginform;
