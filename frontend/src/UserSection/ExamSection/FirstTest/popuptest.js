import React from 'react'
import { Modal } from 'semantic-ui-react'
import './app1.css'
import Test1 from './test1'



function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button id='bottoncours'> Test 1  </button>}
    >
      <Modal.Header>Espace des Test</Modal.Header>
      <Modal.Content image>
        
        <Modal.Description>
            <Test1/>

        </Modal.Description>
      </Modal.Content>

    </Modal>
  )
}

export default ModalExampleModal
