import { React, Component } from "react";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";
import UpdateExamBtn from "../Buttons/UpdateExam";
class NextExam extends Component {
  render() {
    const { CIN, Date, Time, Type } = this.props;
    return (
      <div>
        <fieldset className="prochaine-examen">
          <legend>
            <h1>Next Exam</h1>
          </legend>
          <table>
            <tbody>
              <tr>
                <td>Date :</td>
                <td>{Date}</td>
                <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </td>
                <td>
                  <UpdateExamBtn CIN={CIN} />
                </td>
              </tr>
              <tr>
                <td>Time :</td>
                <td>{Time}</td>
              </tr>
              <tr>
                <td>Type of Exam : </td>
                <td>{Type}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}
export default NextExam;
