import { React } from "react";
import "../../../Assets/AdminSection/Ressources/StyleRessources.css";
import iconmodifier from "../../../Assets/AdminSection/Ressources/icon/mod.png";
import SwitchState from "./SwitchState";
import { useHistory } from "react-router";

export default function Infoveh({
  RegisterPlate,
  Model,
  Brand,
  Sticker,
  TechnicalInspection,
  Insurance,
  Drainage,
  Filters,
  Breaks,
  Wheel,
  Belt,
  Service,
  NumberOfHorses,
}) {
  const History = useHistory();
  const handelassurance = () => {
    let newdate = document.getElementById("assurance").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/vehicules/assurance/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Insurance: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelvignette = () => {
    let newdate = document.getElementById("vignette").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/vehicules/vignette/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Sticker: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelvisite = () => {
    let newdate = document.getElementById("visite").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/vehicules/visite/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ TechnicalInspection: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelvidange = () => {
    let newdate = document.getElementById("vidange").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/vehicules/vidange/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Drainage: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelpneues = () => {
    let newdate = document.getElementById("pneues").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/vehicules/pneues/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Wheel: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelfreinage = () => {
    let newdate = document.getElementById("freinage").value;
    if (newdate === "") alert("Invalid Operation !");
    else {
      fetch(`http://localhost:8000/api/vehicules/freinage/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Breaks: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelfiltre = () => {
    let newdate = document.getElementById("filtre").value;
    if (newdate === "") alert("operation inccorecrt !");
    else {
      fetch(`http://localhost:8000/api/vehicules/filtre/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Filters: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };
  const handelcourroies = () => {
    let newdate = document.getElementById("courroies").value;
    if (newdate === "") alert("operation inccorecrt !");
    else {
      fetch(`http://localhost:8000/api/vehicules/courroies/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Belt: newdate }),
      }).then((res) => res.json());
    }
    History.push("/vehicule/save");
  };

  const handelservice = () => {
    let newdata = !Service;
    if (RegisterPlate === "") {
      alert("Invalid Operation!");
    } else {
      fetch(`http://localhost:8000/api/vehicules/service/${RegisterPlate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Service: newdata }),
      }).then((res) => res.json());
      if (!newdata) {
        alert("The Vehicule " + Brand + " is on service");
      } else {
        alert("The Vehicule " + Brand + " is out of order");
      }
      History.push("/vehicule/save");
    }
  };

  return (
    <div>
      <fieldset className="vehicule">
        <legend>
          <h1>{Brand}</h1>
        </legend>
        <table>
          <tbody>
            <tr>
              <td>Register Plate :</td>
              <td id="RegisterPlate">{RegisterPlate}</td>
            </tr>
            <tr>
              <td>Model :</td>
              <td id="modele">{Model}</td>
            </tr>
            <tr>
              <td>Number Of Horses : </td>
              <td id="ndch">{NumberOfHorses}</td>
            </tr>
            <tr>
              <td>In Service :</td>
              <td>YES</td>
              <td>
                <SwitchState
                  isOn={Service}
                  handleToiconmodifierle={handelservice}
                />{" "}
              </td>
              <td>NO</td>
            </tr>
          </tbody>
        </table>
      </fieldset>

      <fieldset className="papier">
        <table>
          <tbody>
            <tr>
              <td>
                <p style={{ color: "rgba(9, 8, 22, 0.904)" }}>
                  Vehicule's Papers
                </p>{" "}
              </td>
            </tr>
            <tr>
              <td>Sticker's validity :</td>
              <td>{Sticker} </td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="vignette"
                  placeholder="modifier date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelvignette}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Insurance's validity:</td>
              <td>{Insurance}</td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="assurance"
                  placeholder="Modify Date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelassurance}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Technical Inspection's Validity :</td>
              <td>{TechnicalInspection}</td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="visite"
                  placeholder="Modify Date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelvisite}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ color: "rgba(9, 8, 22, 0.904)" }}>
                  Weekly Inspection
                </p>{" "}
              </td>
            </tr>
            <tr>
              <td>Drainage :</td>
              <td>{Drainage}</td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="vidange"
                  placeholder="Modify Date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelvidange}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Changement Of Filters:</td>
              <td>{Filters}</td>
              <td>
                <input size="10" type="date" id="filtre"></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelfiltre}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Breaks :</td>
              <td>{Breaks}</td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="freinage"
                  placeholder="Modify Date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelfreinage}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Wheels :</td>
              <td>{Wheel}</td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="pneues"
                  placeholder="Modify Date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelpneues}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
            <tr>
              <td>Difference Of Belts :</td>
              <td>{Belt}</td>
              <td>
                <input
                  size="10"
                  type="date"
                  id="courroies"
                  placeholder="Modify Date"
                ></input>{" "}
              </td>
              <td>
                {" "}
                <button onClick={handelcourroies}>
                  <img src={iconmodifier} id="re" alt="icon"></img>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      {/*<fieldset id='fieldimagevoi'><img src={voi} id='voi'></img></fieldset>*/}
    </div>
  );
}
