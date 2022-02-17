import { React, useState, useEffect } from "react";
import "../../Assets/AdminSection/Staff/style2.css";
import Window from "./Extensions/Windows/Window.js";
import AddStaff from "./Extensions/Buttons/AddStaff";
import PriviledgeBtn from "./Extensions/Buttons/Priviledge";

export default function Staff() {
  const [searchTerm, setsearchTerm] = useState("");
  const [datas, setdatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      fetch("http://localhost:8000/api/employees")
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
      <fieldset className="infoemp">
        <div className="blocrechercheemp">
          <input
            type="text"
            id="rechercheemp"
            placeholder="Search (Name)"
            onChange={(event) => {
              setsearchTerm(event.target.value);
            }}
          />
          <AddStaff /> <PriviledgeBtn />
          <br></br>
          <table>
            <tbody>
              <tr>
                <td id="tvempii"> CIN </td>
                <td id="tvempii"> FIRSTNAME - LASTNAME </td>
                <td id="tvempii"> PHONENUMBER </td>
                <td id="tvempii"> POSITION </td>
                <td id="tvempii"> SALARY</td>
              </tr>
            </tbody>
          </table>
        </div>

        {datas
          .filter((val) => {
            return (
              val.FirstName.toLowerCase().startsWith(
                searchTerm.toLocaleLowerCase()
              )
            );
          })
          .map((val, key) => {
            return (
              <div key={val.CIN} id="listeemp">
                <Window
                  CIN={val.CIN}
                  LastName={val.LastName}
                  FirstName={val.FirstName}
                  PhoneNumber={val.PhoneNumber}
                  Position={val.Position}
                  Salary={val.Salary}
                  Service={val.Service}
                />
              </div>
            );
          })}
      </fieldset>
    </div>
  );
}
