import React from "react";
import "../../../Assets/AdminSection/Staff/style2.css";
import Icon from "../../../Assets/AdminSection/Staff/Icons/modifier.png";
import { useHistory } from "react-router";

export default function Information({
  CIN,
  LastName,
  FirstName,
  Position,
  PhoneNumber,
  Salary,
  Service,
}) {
  const History = useHistory();
  const HandleDelete = () => {
    alert("employee " + LastName + " " + FirstName + " has been deleted");
    fetch(`http://localhost:8000/api/employees/${CIN}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    History.push("/employe/save");
  };

  const HandleLName = () => {
    let newdate = document.getElementById("TempLastName").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/employees/nom/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ LastName: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };
  const HandleFName = () => {
    let newdate = document.getElementById("TempFirstName").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/employees/prenom/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ FirstName: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };
  const HandleCin = () => {
    let newdate = document.getElementById("TempCIN").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/employees/cin/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ CIN: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };
  const HandlePosition = () => {
    let newdate = document.getElementById("TempPosition").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/employees/poste/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Position: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };
  const HandleSalary = () => {
    let newdate = document.getElementById("TempSalary").value;
    if (newdate === "") alert("operation inccorecrt !");
    else {
      fetch(`http://localhost:8000/api/employees/salaire/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Salary: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };
  const HandlePhoneNumber = () => {
    let newdate = document.getElementById("TempPhoneNumber").value;
    if (newdate === "") alert("operation inccorecrt !");
    else {
      fetch(`http://localhost:8000/api/employees/telephone/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ PhoneNumber: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };
  const HandleService = () => {
    let newdate = document.getElementById("TempService").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/employees/service/${CIN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Service: newdate }),
      }).then((res) => res.json());
      History.push("/employe/save");
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Last Name :</td>
            <td>{LastName}</td>
            <td>
              <input size="10" type="text" id="TempLName"></input>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandleLName}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>First Name :</td>
            <td>{FirstName}</td>
            <td>
              <input
                size="10"
                type="text"
                id="TempFName"
                placeholder=""
              ></input>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandleFName}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>CIN :</td>
            <td>{CIN}</td>
            <td>
              <input size="10" type="text" id="TempCIN" placeholder=""></input>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandleCin}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>Phone Number :</td>
            <td>{PhoneNumber}</td>
            <td>
              <input
                size="10"
                type="text"
                id="TempPhoneNumber"
                placeholder=""
              ></input>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandlePhoneNumber}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>Position :</td>
            <td>{Position}</td>
            <td>
              <input size="10" type="text" id="TempPosition"></input>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandlePosition}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>Salary :</td>
            <td>{Salary}</td>
            <td>
              <input
                size="10"
                type="text"
                id="TempSalary"
                placeholder=""
              ></input>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandleSalary}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
          <tr>
            <td>Service :</td>
            <td>{Service}</td>
            <td>
              <select id="TempService">
                <option value="hors service">Out of Order</option>
                <option value="en service" selected>
                  Working
                </option>{" "}
              </select>{" "}
            </td>
            <td>
              {" "}
              <button onClick={HandleService}>
                <img src={Icon} alt="icon" id="re"></img>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="bott" onClick={HandleDelete}>
        Delete
      </button>
    </div>
  );
}
