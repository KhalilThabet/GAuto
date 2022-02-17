import React from "react";
import { Modal } from "semantic-ui-react";
import "../../../../Assets/AdminSection/Staff/style2.css";
import Formajouter from "./formajouter";

function AddStaff() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button id="Add"> Add </button>}
    >
      <Modal.Header>Add an employee</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Formajouter />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default AddStaff;
