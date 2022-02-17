import { React, useEffect, useState } from "react";
import "../Assets/UserSection/Styles/style.css";
import Prochainesciencecond from "./bodyinfo/SessionPredictor";
import Prochaineexamencond from "./bodyinfo/ExamPredictor";
import Infopersonnelcond from "./bodyinfo/PersonnelDetails";
import PaymentInformations from "./bodyinfo/PayementDetails";
import logo from "../Assets/UserSection/Images/mo2.png";

import im from "../Assets/UserSection/Images/moi.png";
export default function Informations({ PersonnelCIN }) {
  const [save, setSave] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [id1, setid1] = useState("");
  const [id2, setid2] = useState("");
  const [id3, setid3] = useState("");
  const [id4, setid4] = useState("");
  const [id5, setid5] = useState("");
  const [id6, setid6] = useState("");
  const [id7, setid7] = useState("");
  const [id8, setid8] = useState("");
  const [id9, setid9] = useState("");
  const [id10, setid10] = useState("");
  const [id11, setid11] = useState("");
  const [id12, setid12] = useState("");
  const [id13, setid13] = useState("");
  const [id14, setid14] = useState("");
  const [id15, setid15] = useState("");
  const [id16, setid16] = useState("");
  const [id17, setid17] = useState("");
  const [id18, setid18] = useState("");

  useEffect(() => {
    if (!isLoaded) {
      fetch(`http://localhost:8000/api/candidats/${PersonnelCIN}`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setSave(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setid1(save.CIN);
    setid2(save.LastName);
    setid3(save.FirstName);
    setid4(save.PhoneNumber);
    setid5(save.Adress);
    setid6(save.Password);
    setid7(save.NumberOfCodeSessions);
    setid8(save.NumberOfDrivingSessions);
    setid9(save.NumberOfCodeExams);
    setid10(save.NumberOfDrivingExams);
    setid11(save.AmountPaid);
    setid12(save.RemainingPayment);
    setid13(save.DateSession);
    setid14(save.TimeSession);
    setid15(save.TypeSession);
    setid16(save.DateExam);
    setid17(save.TimeExam);
    setid18(save.TypeExam);
  }, [
    isLoaded,
    save.CIN,
    save.LastName,
    save.FirstName,
    save.PhoneNumber,
    save.Adress,
    save.Password,
    save.NumberOfCodeSessions,
    save.NumberOfDrivingSessions,
    save.NumberOfCodeExams,
    save.NumberOfDrivingExams,
    save.AmountPaid,
    save.RemainingPayment,
    save.DateSession,
    save.TimeSession,
    save.TypeSession,
    save.DateExam,
    save.TimeExam,
    save.TypeExam,
    PersonnelCIN,
  ]);

  return (
    <div>
      <fieldset
        style={{ backgroundImage: `url(${im})` }}
        className="bodyinfoespacecond"
      >
        <img src={logo} id="logoencentre" alt="logo"></img>
        <PaymentInformations
          NumberOfCodeSessions={id7}
          NumberOfDrivingSessions={id8}
          NumberOfCodeExams={id9}
          NumberOfDrivingExams={id10}
          AmountPaid={id11}
          RemainingPayment={id12}
        />
        <Infopersonnelcond
          CIN={id1}
          LastName={id2}
          FirstName={id3}
          PhoneNumber={id4}
          Adress={id5}
          Password={id6}
        />

        <Prochaineexamencond Date={id16} Time={id17} Type={id18} />
        <Prochainesciencecond Date={id13} Time={id14} Type={id15} />
      </fieldset>
    </div>
  );
}
