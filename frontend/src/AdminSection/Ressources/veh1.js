import { React, useState, useEffect } from "react";
import "../../Assets/AdminSection/Ressources/StyleRessources.css";
import Information from "./vehcompo/Informations";
import Buttonajouter from "./vehcompo/Buttons/AddButton.js";
import im from "../../Assets/AdminSection/Ressources/icon/mii2.png";

export default function Veh1() {
  const [searchteam, setsearchteam] = useState("");
  const [id1, setid1] = useState("");
  const [id2, setid2] = useState("");
  const [id3, setid3] = useState("");
  const [id4, setid4] = useState("");
  const [id5, setid5] = useState("");
  const [id6, setid6] = useState("");
  const [id7, setid7] = useState("");
  const [id10, setid10] = useState("");
  const [id12, setid12] = useState("");
  const [id13, setid13] = useState("");
  const [id8, setid8] = useState("");
  const [id9, setid9] = useState("");
  const [id11, setid11] = useState("");

  const day = new Date();
  const [datas, setdatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      console.log("loaded");
      fetch("http://localhost:8000/api/vehicules")
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          setdatas(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <div>
      <fieldset className="infoveh">
        <div className="blocrecherche">
          <input
            type="text"
            id="rechercheveh"
            placeholder="Rechercher (Brand)"
            onChange={(event) => {
              setsearchteam(event.target.value);
            }}
          />
          <Buttonajouter />
        </div>

        {datas
          .filter((val) => {
            return val.Brand
              .toLowerCase()
              .startsWith(searchteam.toString().toLowerCase());
          })
          .map((val, key) => {
            return (
              <div key={val.RegisterPlate} id="listeveh">
                <table>
                  <tbody>
                    <tr>
                      <button
                        id="tv"
                        onClick={(e) => {
                          setid1(val.Insurance);
                          setid2(val.RegisterPlate);
                          setid3(val.TechnicalInspection);
                          setid4(val.Brand);
                          setid5(val.Model);
                          setid6(val.Sticker);
                          setid7(val.Drainage);
                          setid8(val.Filters);
                          setid9(val.Breaks);
                          setid10(val.Wheel);
                          setid11(val.Belt);
                          setid12(val.Service);
                          setid13(val.NumberOfHorses);

                          const d1 = new Date(val.Insurance);
                          const d2 = new Date(val.TechnicalInspection);
                          const d3 = new Date(val.Sticker);
                          const d4 = new Date(val.Drainage);
                          const d5 = new Date(val.Filters);
                          const d6 = new Date(val.Breaks);
                          const d7 = new Date(val.Wheel);
                          const d8 = new Date(val.Belt);

                          let ch = val.RegisterPlate + "   " + val.Brand + "\n";
                          const cc = ch;
                          if (d1 < day)
                            ch =
                              ch +
                              "-The validity of the insurance has expired \n";
                          if (d2 < day)
                            ch =
                              ch +
                              "-The validity of the inspection has expired \n";
                          if (d3 < day)
                            ch =
                              ch +
                              "-The validity of the sticker has expired \n";
                          if (d4 < day) ch = ch + "-Drainage is requested\n ";
                          if (d5 < day)
                            ch = ch + "-Filters needs maintenance  \n";
                          if (d6 < day)
                            ch = ch + "-The breaks needs maintenance \n";
                          if (d7 < day)
                            ch = ch + "-Wheels needs maintenance \n";
                          if (d8 < day) ch = ch + "-Belts needs maintenance";
                          if (ch !== cc) alert(ch);
                        }}
                      >
                        {val.RegisterPlate} - {val.Brand}
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </fieldset>
      <fieldset
        className="bodyinfoveh"
        style={{ backgroundImage: `url(${im})` }}
      >
        <Information
          RegisterPlate={id2}
          Model={id5}
          Brand={id4}
          Sticker={id6}
          Insurance={id1}
          TechnicalInspection={id3}
          Drainage={id7}
          Filters={id8}
          Breaks={id9}
          Wheel={id10}
          Belt={id11}
          Service={id12}
          NumberOfHorses={id13}
        />
      </fieldset>
    </div>
  );
}
