import { React, useState, useEffect } from "react";
import "../../Assets/AdminSection/Candidate/CandidateStyle.css";
import Paiement from "./Extensions/Informations/PaymentDetails";
import PersonnelInformation from "./Extensions/Informations/PersonnelDetails";
import NextSession from "./Extensions/Informations/SessionHandler";
import NextExam from "./Extensions/Informations/ExamHandler";
import AddUserBtn from "./Extensions/Buttons/AddUser";
import im from "../../Assets/AdminSection/Candidate/Decoration.png";

export default function Condidat() {
  const [searchteam, setsearchteam] = useState("");
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
  const [datas, setdatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      fetch("http://localhost:8000/api/candidats")
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setdatas(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return (
    <div>
      <fieldset
        className="bodyinfocond"
        style={{ backgroundImage: `url(${im})` }}
      >
        <Paiement
          ID={id1}
          NumberOfCodeSessions={id7}
          NumberOfDrivingSessions={id8}
          NumberOfCodeExams={id9}
          NumberOfDrivingExams={id10}
          AmountPaid={id11}
          RemainingPayment={id12}
        />
        <NextSession CIN={id1} Date={id13} Time={id14} Type={id15} />
        <NextExam CIN={id1} Date={id16} Time={id17} Type={id18} />
        <PersonnelInformation
          CIN={id1}
          LastName={id2}
          FirstName={id3}
          PhoneNumber={id4}
          Adress={id5}
          Password={id6}
        />
      </fieldset>

      <fieldset className="infocond">
        <div className="blocrecherchecond">
          <input
            type="text"
            id="recherchecond"
            placeholder="Search (Name)"
            onChange={(event) => {
              setsearchteam(event.target.value);
            }}
          />
          <AddUserBtn />
        </div>
        {datas
          .filter((val) => {
            return val.LastName.toString().toLowerCase().startsWith(
              searchteam.toLowerCase()
            );
          })
          .map((val, key) => {
            return (
              <div key="val.CIN" id="listecond">
                <table>
                  <tbody>
                    <tr>
                      <button
                        id="tvcond"
                        onClick={(e) => {
                          setid1(val.CIN);
                          setid2(val.LastName);
                          setid3(val.FirstName);
                          setid4(val.PhoneNumber);
                          setid5(val.Adress);
                          setid6(val.Password);
                          setid7(val.NumberOfCodeSessions);
                          setid8(val.NumberOfDrivingSessions);
                          setid9(val.NumberOfCodeExams);
                          setid10(val.NumberOfDrivingExams);
                          setid11(val.AmountPaid);
                          setid12(val.RemainingAmount);
                          setid13(val.DateSession);
                          setid14(val.TimeSession);
                          setid15(val.TypeSession);
                          setid16(val.DateExam);
                          setid17(val.TimeExam);
                          setid18(val.TypeExam);
                        }}
                      >
                        {val.LastName} {val.FirstName}
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </fieldset>
    </div>
  );
}
