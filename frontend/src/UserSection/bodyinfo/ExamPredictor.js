import { React, Component } from "react";
import "../../Assets/UserSection/Styles/StyleBI.css";

class Prochaineexamencond extends Component {
  render() {
    const { Date, Time, Type } = this.props;
    return (
      <div>
        <fieldset className="prochaine-examencond">
          <legend>
            <h1>Next Exam</h1>
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
                <td>Type Of Exam:</td>
                <td>{Type}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}
export default Prochaineexamencond;
