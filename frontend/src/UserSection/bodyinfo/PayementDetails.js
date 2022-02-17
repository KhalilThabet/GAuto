import { React, Component } from "react";
import "../../Assets/UserSection/Styles/StyleBI.css";

class Paiementcond extends Component {
  render() {
    const {
      NumberOfCodeSessions,
      NumberOfDrivingSessions,
      NumberOfCodeExams,
      NumberOfDrivingExams,
      AmountPaid,
      RemainingPayment,
    } = this.props;
    return (
      <div>
        <fieldset className="paiementcond">
          <legend>
            <h1>Payement Details </h1>
          </legend>
          <table>
            <tbody>
              <tr>
                <td>Number Of Code Sessions :</td>
                <td>{NumberOfCodeSessions}</td>
              </tr>
              <tr>
                <td>Number Of Driving Sessions :</td>
                <td>{NumberOfDrivingSessions}</td>
              </tr>
              <tr>
                <td>Number Of Code Exams :</td>
                <td>{NumberOfCodeExams}</td>
              </tr>
              <tr>
                <td>Number Of Driving Exams :</td>
                <td>{NumberOfDrivingExams}</td>
              </tr>
              <tr>
                <td>Amount Paid :</td>
                <td>{AmountPaid}</td>
              </tr>
              <tr>
                <td>Remaining Payement :</td>
                <td>{RemainingPayment}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}
export default Paiementcond;
