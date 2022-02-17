import React, { useEffect, useState } from "react";
import "../../../../Assets/AdminSection/Staff/style2.css";
import { useHistory } from "react-router";

export default function Formajouter() {
  const History = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [id1, setid1] = useState("");
  const [id2, setid2] = useState("");
  const [id3, setid3] = useState("");
  const [id4, setid4] = useState("");
  useEffect(() => {
    if (!isLoaded) {
      fetch("http://localhost:8000/api/items/accdir")
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setid1(data.CIN);
          setid2(data.Password);
        })
        .catch((err) => {
          console.log(err);
        });
      fetch("http://localhost:8000/api/items/accemp")
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setid3(data.CIN);
          setid4(data.Password);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const handlemoddir = () => {
    var TempUserAdmin = document.getElementById("TempUserAdmin").value;
    var TempPasswordAdmin = document.getElementById("TempPasswordAdmin").value;
    const data = {
      CIN: TempUserAdmin,
      Password: TempPasswordAdmin,
    };
    if (TempUserAdmin === "") {
      alert("l operation est inccorect !");
    } else {
      fetch(`http://localhost:8000/api/items/dir`, {
        method: "PUT",
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
  const handlemodemp = () => {
    var TempUser = document.getElementById("TempUser").value;
    var TempPassword = document.getElementById("TempPassword").value;
    const data = {
      CIN: TempUser,
      Password: TempPassword,
    };
    if (TempUser === "") {
      alert("l operation est inccorect !");
    } else {
      fetch(`http://localhost:8000/api/items/emp`, {
        method: "PUT",
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
        <h1>Admin</h1>
        <table>
          <tbody>
            <tr>
              <td>CIN :</td>
              <td>{id1}</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempUserAdmin"
                  required
                ></input>{" "}
              </td>
              <td rowSpan={2}>
                <button id="bott" onClick={handlemoddir}>
                  Modify
                </button>
              </td>
            </tr>
            <tr>
              <td>Password :</td>
              <td>{id2}</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempPasswordAdmin"
                  placeholder=""
                  required
                ></input>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <form>
        <h1>Employee</h1>
        <table>
          <tbody>
            <tr>
              <td>CIN :</td>
              <td>{id3}</td>
              <td>
                <input size="10" type="text" id="TempUser" required></input>{" "}
              </td>
              <td rowSpan={2}>
                <button id="bott" onClick={handlemodemp}>
                  Modify
                </button>
              </td>
            </tr>
            <tr>
              <td>Password :</td>
              <td>{id4}</td>
              <td>
                <input
                  size="10"
                  type="text"
                  id="TempPassword"
                  placeholder=""
                  required
                ></input>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
