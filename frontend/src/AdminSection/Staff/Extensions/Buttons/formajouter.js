import React from "react";
import "../../../../Assets/AdminSection/Staff/style2.css";
import { useHistory } from "react-router";

export default function Formajouter() {
  const History = useHistory();
  const HandleStaffAdd = () => {
    var TempLName = document.getElementById("TempLName").value;
    var TempFName = document.getElementById("TempFName").value;
    var TempCIN = document.getElementById("TempCIN").value;
    var TempPosition = document.getElementById("TempPosition").value;
    var TempSalary = document.getElementById("TempSalary").value;
    var TempPhoneNumber = document.getElementById("TempPhoneNumber").value;
    var TempService = document.getElementById("TempService").value;
    const data = {
      LastName: TempLName,
      FirstName: TempFName,
      CIN: TempCIN,
      Salary: TempSalary,
      Position: TempPosition,
      PhoneNumber: TempPhoneNumber,
      Service: TempService,
    };
    if (TempCIN === "") {
      alert("Invalid Operation !");
    } else {
      fetch("http://localhost:8000/api/employees", {
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
      History.push("/employe/save");
    }
  };

  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Last Name :</td>
              <td>
                <input size="10" type="text" id="TempLName" required></input>{" "}
              </td>
            </tr>
            <tr>
              <td>First Name :</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempFName"
                  placeholder=""
                  required
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>CIN :</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempCIN"
                  placeholder=""
                  required
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Phone Number :</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempPhoneNumber"
                  placeholder=""
                  required
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Position :</td>
              <td>
                <input size="10" type="text" id="TempPosition" required></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Salary :</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempSalary"
                  placeholder=""
                  required
                ></input>{" "}
              </td>
            </tr>
            <tr>
              <td>In Service :</td>
              <td>
                <select id="TempService">
                  <option value="hors service">Out Of Order</option>
                  <option value="en service" selected>
                    In Service
                  </option>{" "}
                </select>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <button id="bott" onClick={HandleStaffAdd}>
        Add
      </button>
    </div>
  );
}
