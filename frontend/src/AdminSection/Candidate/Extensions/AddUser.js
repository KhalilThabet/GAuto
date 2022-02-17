import { React } from "react";
import { useHistory } from "react-router-dom";
import "../../../Assets/AdminSection/Candidate/CandidateStyle.css";

export default function AddUser() {
  let History = useHistory();

  const HandleSubmit = () => {
    var TempLName = document.getElementById("TempLName").value;
    var TempFName = document.getElementById("TempFName").value;
    var TempCIN = document.getElementById("TempCIN").value;
    var TempAdress = document.getElementById("TempAdress").value;
    var TempAdressMail = document.getElementById("TempAdressMail").value;
    var TempPhoneNumber = document.getElementById("TempPhoneNumber").value;
    var TempPassword = document.getElementById("TempPassword").value;
    const data = {
      LastName: TempLName,
      FirstName: TempFName,
      CIN: TempCIN,
      Adress: TempAdress,
      AdressMail: TempAdressMail,
      PhoneNumber: TempPhoneNumber,
      Password: TempPassword,
    };

    if (TempCIN === "") {
      alert("Invalid Operation : Please Enter CIN");
    } else {
      fetch("http://localhost:8000/api/candidats", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => {
          response.json();
        })
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.log(err));
    }
    History.push("/gcondidat/save");
  };
  return (
    <div className="formnewcandidat">
      <form>
        <table>
          <tbody>
            <tr>
              <td>Last Name :</td>
              <td>
                <input type="text" id="TempLName"></input>{" "}
              </td>
              <td>First Name :</td>
              <td>
                <input
                  type="text"
                  id="TempFName
                    "
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>CIN :</td>
              <td>
                <input type="text" id="TempCIN"></input>{" "}
              </td>
              <td>Adress :</td>
              <td>
                <input type="text" id="TempAdress"></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Adress Mail :</td>
              <td>
                <input type="email" id="TempAdressMail"></input>{" "}
              </td>
              <td>Phone Number :</td>
              <td>
                <input type="text" id="TempPhoneNumber"></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Password :</td>
              <td>
                <input type="text" id="TempPassword"></input>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <button id="boo3" onClick={HandleSubmit}>
          Confirm
        </button>
      </form>
    </div>
  );
}
