import { React } from "react";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";
import PlusIcon from "../../../../Assets/AdminSection/Candidate/icons/plus.png";
import MinusIcon from "../../../../Assets/AdminSection/Candidate/icons/moins.png";
import { useHistory } from "react-router";

export default function Payement({
  ID,
  NumberOfCodeSessions,
  NumberOfDrivingSessions,
  NumberOfCodeExams,
  NumberOfDrivingExams,
  AmountPaid,
  RemainingPayment,
}) {
  const History = useHistory();
  const ReduceNumberOfDrivingSessions = () => {
    fetch(`http://localhost:8000/api/candidats/nbSessionconduit/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfDrivingSessions: NumberOfDrivingSessions - 1,
        RemainingPayment: RemainingPayment - 40,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const ReduceNumberOfCodesSessions = () => {
    fetch(`http://localhost:8000/api/candidats/nbSessioncode/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfCodeSessions: NumberOfCodeSessions - 1,
        RemainingPayment: RemainingPayment - 10,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const ReduceNumberOfDrivingExams = () => {
    fetch(`http://localhost:8000/api/candidats/nbExamconduite/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfDrivingExams: NumberOfDrivingExams - 1,
        RemainingPayment: RemainingPayment - 120,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const ReduceNumberOfCodesExams = () => {
    fetch(`http://localhost:8000/api/candidats/nbExamcode/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfCodeExams: NumberOfCodeExams - 1,
        RemainingPayment: RemainingPayment - 70,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const AugmentNumberOfDrivingSessions = () => {
    fetch(`http://localhost:8000/api/candidats/nbSessionconduit/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfDrivingSessions: NumberOfDrivingSessions + 1,
        RemainingPayment: RemainingPayment + 40,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const AugmentNumberOfCodesSessions = () => {
    fetch(`http://localhost:8000/api/candidats/nbSessioncode/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfCodeSessions: NumberOfCodeSessions + 1,
        RemainingPayment: RemainingPayment + 10,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const AugmentNumberOfDrivingExams = () => {
    fetch(`http://localhost:8000/api/candidats/nbExamconduite/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfDrivingExams: NumberOfDrivingExams + 1,
        RemainingPayment: RemainingPayment + 120,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const AugmentNumberOfCodesExams = () => {
    fetch(`http://localhost:8000/api/candidats/nbExamcode/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        NumberOfCodeExams: NumberOfCodeExams + 1,
        RemainingPayment: RemainingPayment + 70,
      }),
    }).then((res) => res.json());
    History.push("/gcondidat/save");
  };
  const MontantPayeePlus = () => {
    let Money = document.getElementById("Amount").value;
    if (Money === "") {
      alert("Invalid Operation !");
    } else {
      let ss = parseFloat(Money) + AmountPaid;
      let dd = RemainingPayment - parseFloat(Money);
      fetch(`http://localhost:8000/api/candidats/montantpayee/${ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ AmountPaid: ss, AmountRemaining: dd }),
      }).then((res) => res.json());
    }
    History.push("/gcondidat/save");
  };

  return (
    <div>
      <fieldset className="paiementsection">
        <legend>
          <h1>Payement Informations </h1>
        </legend>
        <table>
          <tbody>
            <tr>
              <td>Number Of Code Sessions :</td>
              <td>{NumberOfCodeSessions}</td>
              <td>
                {" "}
                <button onClick={ReduceNumberOfCodesSessions}>
                  <img src={MinusIcon} alt="icon moins" id="re"></img>
                </button>
              </td>
              <td>
                {" "}
                <button onClick={AugmentNumberOfCodesSessions}>
                  <img src={PlusIcon} alt="icon plus" id="re"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Number Of Driving Sessions :</td>
              <td>{NumberOfDrivingSessions}</td>
              <td>
                {" "}
                <button onClick={ReduceNumberOfDrivingSessions}>
                  <img src={MinusIcon} alt="icon moins" id="re"></img>
                </button>
              </td>
              <td>
                {" "}
                <button onClick={AugmentNumberOfDrivingSessions}>
                  <img src={PlusIcon} alt="icon plus" id="re"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Number Of Code Exams :</td>
              <td>{NumberOfCodeExams}</td>
              <td>
                {" "}
                <button onClick={ReduceNumberOfCodesExams}>
                  <img src={MinusIcon} alt="icon moins" id="re"></img>
                </button>
              </td>
              <td>
                {" "}
                <button onClick={AugmentNumberOfCodesExams}>
                  <img src={PlusIcon} alt="icon plus" id="re"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Number Of Driving Exams :</td>
              <td>{NumberOfDrivingExams}</td>
              <td>
                {" "}
                <button onClick={ReduceNumberOfDrivingExams}>
                  <img src={MinusIcon} alt="icon moins" id="re"></img>
                </button>
              </td>
              <td>
                {" "}
                <button onClick={AugmentNumberOfDrivingExams}>
                  <img src={PlusIcon} alt="icon plus" id="re"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Amount Of Money Paid :</td>
              <td>{AmountPaid}</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="Amount"
                  placeholder="Add Amount"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={MontantPayeePlus}>
                  <img src={PlusIcon} alt="icon plus" id="re"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Amount Remaining To Be Paid:</td>
              <td>{RemainingPayment}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  );
}
