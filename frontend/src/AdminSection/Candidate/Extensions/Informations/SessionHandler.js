import { React, Component } from "react";
import "../../../../Assets/AdminSection/Candidate/CandidateStyle.css";
import Buttonupdateseance from "../Buttons/UpdateSession";

class NextSession extends Component {
  render() {
    const { CIN, Date, Time, Type } = this.props;

    return (
      <div>
        <fieldset className="prochaine-science">
          <legend>
            <h1>Next Session</h1>
          </legend>
          <table>
            <tbody>
              <tr>
                <td>Date :</td>
                <td>{Date}</td>
                <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </td>
                <td>
                  <Buttonupdateseance CIN={CIN} />
                </td>
              </tr>
              <tr>
                <td>Time :</td>
                <td>{Time}</td>
              </tr>
              <tr>
                <td>Type of Session:</td>
                <td>{Type}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}
export default NextSession;
