import React , {useState} from 'react';
import '../style/First_page.css';
import '../style/Login_form.css';
import CandidatLoginform from './Candidat_Login_form' ;
import AdminLoginform from './Admin_Login_form' ;
import Adminbtn from './Admin_btn';
import Candidatbtn from './Candidat_btn';
import Footer from './Footer';
import Navbarhome from './navbarhome'

function First_page({funcondidat,funadmin,idcondidat}) {
  const [isShowAdminLogin ,setisShowAdminLogin] = useState(true) 
  const [isShowCandidatLogin ,setisShowCandidatLogin] = useState(true)
  const handleAdminclick=() =>{setisShowAdminLogin((isShowAdminLogin)=> !isShowAdminLogin)}
  const handleCandidatclick=() =>{setisShowCandidatLogin((isShowCandidatLogin)=> !isShowCandidatLogin)}
  return (
    
    
     <div className='First_page'> 
     <Navbarhome/>
     <Adminbtn handleAdminclick={handleAdminclick}/>
     <Candidatbtn handleCandidatclick={handleCandidatclick} />
     <AdminLoginform isShowAdminLogin ={isShowAdminLogin} fonctionadmin={funadmin} />
     
     <CandidatLoginform isShowCandidatLogin={isShowCandidatLogin} fonctioncondidat={funcondidat} cincondidat={idcondidat}/>
     
     <Footer/>

    </div>

  );
   
   
 
}

export default First_page;
