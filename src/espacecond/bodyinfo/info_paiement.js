import{React,Component} from 'react'
import './stylecompocondidatcond.css'

class Paiementcond extends Component{
    render(){
        const {ncod,ncon,nexcod,nexcon,mp,mrp}=this.props
        return(
            <div>
                <fieldset className='paiementcond'>
                    <legend><h1>information de paiement </h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>nombre de sience de code :</td>
                                <td>{ncod}</td>
                            </tr>
                            <tr>
                                <td>nombre de sience de conduit :</td>
                                <td>{ncon}</td>
                            </tr>
                            <tr>
                                <td>nombre d'examen code :</td>
                                <td>{nexcod}</td>
                            </tr>
                            <tr>
                                <td>nombre d'examen conduit :</td>
                                <td>{nexcon}</td>
                            </tr>
                            <tr>
                                <td>le montant payée :</td>
                                <td>{mp}</td>
                            </tr>
                            <tr>
                                <td>le montant reste à payée :</td>
                                <td>{mrp}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Paiementcond