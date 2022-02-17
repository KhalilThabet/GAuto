import { React, Component } from "react";
import "../../Assets/UserSection/Styles/StyleBI.css";

class Prochainesciencecond extends Component {
  render() {
    const { Date, Time, Type } = this.props;
    return (
      <div>
        <fieldset className="prochaine-sciencecond">
          <legend>
            <h1>Next Session</h1>
          </legend>
          <table>
            <tbody>
              <tr>
                <td>Date :</td>
                <td>{Date}</td>
              </tr>
              <tr>
                <td>Time :</td>
                <td>{Time}</td>
              </tr>
              <tr>
                <td>Type Of Session:</td>
                <td>{Type}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}
export default Prochainesciencecond;
