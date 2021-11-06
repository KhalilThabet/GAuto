import React from 'react'
import { Modal } from 'semantic-ui-react'
import '../../style2.css'
import Formajouter from './formajouter'




function Ajouteremp() {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<button id='ajouter'> Ajouter </button>}
        >
            <Modal.Header>Ajouter un employee</Modal.Header>
            <Modal.Content image>

                <Modal.Description>
                    <Formajouter />
                </Modal.Description>
            </Modal.Content>

        </Modal>
    )
}

export default Ajouteremp