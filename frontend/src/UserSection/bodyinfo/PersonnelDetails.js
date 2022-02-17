import { React, Component } from "react";
import "../../Assets/UserSection/Styles/StyleBI.css";

class Infopersonnelcond extends Component {
  render() {
    const { CIN, LastName, FirstName, PhoneNumber, Adress, Password } =
      this.props;
    return (
      <div>
        <fieldset className="info_personnelcond">
          <legend>
            <h1>Personnel Information</h1>
          </legend>
          <table>
            <tbody>
              <tr>
                <td>CIN :</td>
                <td>{CIN}</td>
              </tr>
              <tr>
                <td>Last Name :</td>
                <td>{LastName}</td>
              </tr>
              <tr>
                <td>First Name :</td>
                <td>{FirstName}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{PhoneNumber}</td>
              </tr>
              <tr>
                <td>Adress :</td>
                <td>{Adress}</td>
              </tr>
              <tr>
                <td>Password :</td>
                <td>{Password}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}
export default Infopersonnelcond;
