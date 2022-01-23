import React from 'react'
import { Modal } from 'semantic-ui-react'
import '../style2.css'
import Infoemp from './infoemp.js'




function ModalExampleModal({ cin,nom,prenom,tel,poste,salaire,service}) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<button id='tvemp'>
                <table>
                    <tbody>
                        <tr>

                            <td id='tvempii'>{cin}</td>
                            <td id='tvempii'> {nom} -{prenom}</td>
                            <td id='tvempii'>{tel}</td>
                            <td id='tvempii'> {poste}</td>
                            <td id='tvempii'> {salaire}</td>

                        </tr>
                    </tbody>
                </table>
            </button>}
        >
            <Modal.Header>{nom} {prenom}</Modal.Header>
            <Modal.Content image>

                <Modal.Description>
                    <Infoemp idemp={cin} nomemp={nom} prenomemp={prenom} telemp={tel} posteemp={poste} salaireemp={salaire} serviceemp={service} />


                </Modal.Description>
            </Modal.Content>

        </Modal>
    )
}

export default ModalExampleModal