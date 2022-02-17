import { React, Component } from "react";
import "../Assets/UserSection/Styles/style.css";
import im from "../Assets/UserSection/Images/moi.png";
import Pop from "./ExamSection/FirstTest/popuptest.js";
import Pop2 from "./ExamSection/SecondTest/popuptest.js";

class Espacecour extends Component {
  state = {
    cours: [
      { c1: "cour1", q1: "qestion1", q2: "question2" },
      { c1: "cour2", q1: "qestion1", q2: "question2" },
      { c1: "cour3", q1: "qestion1", q2: "question2" },
      { c1: "cour4", q1: "qestion1", q2: "question2" },
    ],
  };
  render() {
    return (
      <div>
        <fieldset
          style={{ backgroundImage: `url(${im})` }}
          className="field-test"
        >
          <Pop />
          <Pop2 />
        </fieldset>
      </div>
    );
  }
}
export default Espacecour;
