import React, { useState } from "react";
import "../Assets/Main/style/First_page.css";
import "../Assets/Main/style/Login_form.css";
import CandidatLoginform from "./Candidat_Login_form";
import AdminLoginform from "./Admin_Login_form";
import Adminbtn from "./Admin_btn";
import Candidatbtn from "./Candidat_btn";
import Footer from "./Footer";
import Navbarhome from "./navbarhome";

function First_page({ functCandidat, functAdmin, idCandidat }) {
  const [isShowAdminLogin, setisShowAdminLogin] = useState(true);
  const [isShowCandidatLogin, setisShowCandidatLogin] = useState(true);
  const handleAdminclick = () => {
    setisShowAdminLogin((isShowAdminLogin) => !isShowAdminLogin);
  };
  const handleCandidatclick = () => {
    setisShowCandidatLogin((isShowCandidatLogin) => !isShowCandidatLogin);
  };
  return (
    <div className="First_page">
      <Navbarhome />
      <Adminbtn handleAdminclick={handleAdminclick} />
      <Candidatbtn handleCandidatclick={handleCandidatclick} />
      <AdminLoginform
        isShowAdminLogin={isShowAdminLogin}
        fonctionadmin={functAdmin}
      />

      <CandidatLoginform
        isShowCandidatLogin={isShowCandidatLogin}
        fonctioncondidat={functCandidat}
        cincondidat={idCandidat}
      />

      <Footer />
    </div>
  );
}

export default First_page;
