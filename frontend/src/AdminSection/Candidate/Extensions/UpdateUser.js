import { React } from "react";
import "../../../Assets/AdminSection/Candidate/CandidateStyle.css";
import { useHistory } from "react-router";

export default function UpdateUser({
  CIN,
  LastName,
  FirstName,
  PhoneNumber,
  Adress,
  Password,
}) {
  const History = useHistory();

  const HandleSubmit = () => {
    let TempLName = document.getElementById("TempLName").value;
    let TempFName = document.getElementById("TempFName").value;
    let TempCIN = document.getElementById("TempCIN").value;
    let TempAdress = document.getElementById("TempAdress").value;
    let TempAdressMail = document.getElementById("TempAdressMail").value;
    let TempPhoneNumber = document.getElementById("TempPhoneNumber").value;
    let TempPassword = document.getElementById("TempPassword").value;
    if (CIN === "") {
      alert("Invalid Operation !");
    } else {
      if (TempLName === "") TempLName = LastName;
      if (TempFName === "") TempFName = FirstName;
      if (TempCIN === "") TempCIN = CIN;
      if (TempAdress === "") TempAdress = Adress;
      if (TempPhoneNumber === "") TempPhoneNumber = PhoneNumber;
      if (TempPassword === "") TempPassword = Password;

      const data = {
        LastName: TempLName,
        FirstName: TempFName,
        CIN: TempCIN,
        Adress: TempAdress,
        AdressMail: TempAdressMail,
        PhoneNumber: TempPhoneNumber,
        Password: TempPassword,
      };

      fetch(`http://localhost:8000/api/candidats/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    }

    History.push("/gcondidat/save");
  };

  const handleDelete = () => {
    if (CIN === "") {
      alert("Invalid Operation !");
    } else {
      alert("Candidate " + LastName + " " + FirstName + " has been deleted");
      fetch(`http://localhost:8000/api/candidats/${CIN}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
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
                <input
                  type="text"
                  id="TempLName"
                  placeholder={LastName}
                ></input>{" "}
              </td>
              <td>First Name :</td>
              <td>
                <input
                  type="text"
                  id="TempFName"
                  placeholder={FirstName}
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>CIN :</td>
              <td>
                <input type="text" id="TempCIN" placeholder={CIN}></input>{" "}
              </td>
              <td>Adress :</td>
              <td>
                <input type="text" id="TempAdress" placeholder={Adress}></input>
              </td>
            </tr>
            <tr>
              <td>Adress Mail :</td>
              <td>
                <input type="text" id="TempAdressMail"></input>{" "}
              </td>
              <td>Phone Number :</td>
              <td>
                <input
                  type="text"
                  id="TempPhoneNumber"
                  placeholder={PhoneNumber}
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Password :</td>
              <td>
                <input
                  type="text"
                  id="TempPassword"
                  placeholder={Password}
                ></input>{" "}
              </td>
            </tr>
            <button id="boo3" onClick={HandleSubmit}>
              Confirm
            </button>
            <button id="boo3" onClick={handleDelete}>
              Delete
            </button>
          </tbody>
        </table>
      </form>
    </div>
  );
}
