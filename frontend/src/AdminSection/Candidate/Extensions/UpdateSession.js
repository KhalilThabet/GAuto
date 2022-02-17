import { React } from "react";
import "../../../Assets/AdminSection/Candidate/CandidateStyle.css";
import { useHistory } from "react-router";

export default function UpdateSession({ ID }) {
  const History = useHistory();
  const HandleSubmit = () => {
    let Date = document.getElementById("TempDate").value;
    let Time = document.getElementById("TempTime").value;
    let Type = document.getElementById("TempType").value;
    const Data = {
      DateSession: Date,
      TimeSession: Time,
      TypeSession: Type,
    };
    if (Date === "") {
      alert("Date of next Session is Empty");
    } else {
      fetch(`http://localhost:8000/api/candidats/session/${ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      }).then((res) => res.json());
    }
    History.push("/gcondidat/save");
  };
  return (
    <div className="formnewcandidat">
      <form className="formupdateseance">
        <table>
          <tbody>
            <tr>
              <td>Date :</td>
              <td>
                <input type="date" id="TempDate" required></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Time :</td>
              <td>
                <input type="time" id="TempTime" required></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Type Of Session :</td>
              <td>
                <select id="TempType">
                  <option name="Code" value="Code" selected>
                    Code
                  </option>
                  <option name="Driving" value="Driving">
                    Driving
                  </option>
                </select>
              </td>
            </tr>
            <button id="boo3" onClick={HandleSubmit}>
              Submit
            </button>
          </tbody>
        </table>
      </form>
    </div>
  );
}
