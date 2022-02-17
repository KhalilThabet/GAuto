import React from "react";
import { Modal } from "semantic-ui-react";
import "../../../../Assets/AdminSection/Staff/style2.css";
import Formamodifier from "./formamodifier.js";

function Buttonmod() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button id="ajouter"> Access </button>}
    >
      <Modal.Header>Modify Access</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Formamodifier />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default Buttonmod;
