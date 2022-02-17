import React from "react";
import { Modal } from "semantic-ui-react";
import "../../../../Assets/AdminSection/Staff/style2.css";
import Infoemp from "../Informations.js";

function ModalExampleModal({
  CIN,
  LastName,
  FirstName,
  PhoneNumber,
  Position,
  Salary,
  Service,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button id="tvemp">
          <table>
            <tbody>
              <tr>
                <td id="tvempii">{CIN}</td>
                <td id="tvempii">
                  {" "}
                  {LastName} -{FirstName}
                </td>
                <td id="tvempii">{PhoneNumber}</td>
                <td id="tvempii"> {Position}</td>
                <td id="tvempii"> {Salary}</td>
              </tr>
            </tbody>
          </table>
        </button>
      }
    >
      <Modal.Header>
        {LastName} {FirstName}
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Infoemp
            CIN={CIN}
            LastName={LastName}
            FirstName={FirstName}
            PhoneNumber={PhoneNumber}
            Position={Position}
            Salary={Salary}
            Service={Service}
          />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default ModalExampleModal;
