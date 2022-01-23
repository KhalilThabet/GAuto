import React from 'react'
import { Modal } from 'semantic-ui-react'
import '../../style2.css'
import Formamodifier from './formamodifier.js'


function Buttonmod() {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<button id='ajouter'> Acces </button>}
        >
            <Modal.Header>Modifier l'acces</Modal.Header>
            <Modal.Content image>

                <Modal.Description>
                    <Formamodifier />
                </Modal.Description>
            </Modal.Content>

        </Modal>
    )
}

export default Buttonmod