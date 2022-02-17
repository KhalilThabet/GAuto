import { React } from "react";
import "../../../Assets/AdminSection/Ressources/StyleRessources.css";
import { useHistory } from "react-router";

export default function Ajouteveh() {
  const History = useHistory();
  const HandleSubmit = () => {
    var TempRegisterPlate = document.getElementById("TempRegisterPlate").value;
    var TempBrand = document.getElementById("TempBrand").value;
    var TempModel = document.getElementById("TempModel").value;
    var TempNumberOfHorses =
      document.getElementById("TempNumberOfHorses").value;
    const data = {
      RegisterPlate: TempRegisterPlate,
      Model: TempModel,
      NumberOfHorses: TempNumberOfHorses,
      Brand: TempBrand,
    };
    if (TempRegisterPlate === "") {
      alert("l operation est inccorect !");
    } else {
      fetch("http://localhost:8000/api/vehicules", {
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
    History.push("/vehicule/save");
  };

  return (
    <div className="formupdateveh">
      <form>
        <table>
          <tbody>
            <tr>
              <td>Register Plate </td>
              <td>
                <input type="text" id="TempRegisterPlate"></input>{" "}
              </td>
              <td>Model :</td>
              <td>
                <input type="text" id="TempModel"></input>{" "}
              </td>
            </tr>
            <tr>
              <td>Brand :</td>
              <td>
                <input type="text" id="TempBrand"></input>{" "}
              </td>
            </tr>
            <tr>
              <td>N° Of Horses :</td>
              <td>
                <input type="text" id="TempNumberOfHorses"></input>{" "}
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
