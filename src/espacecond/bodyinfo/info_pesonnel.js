import{React,Component} from 'react'
import './stylecompocondidatcond.css'

class Infopersonnelcond extends Component{
    render(){
        const {cin , nom, prenom, num, ad , mdp }=this.props
        return(
            <div>
                <fieldset className='info_personnelcond'>
                    <legend><h1>Information Personel</h1></legend>
                    <table>
                        <tbody>
                        <tr>
                                <td>CIN :</td>
                                <td>{cin}</td>
                            </tr>
                            <tr>
                                <td>Nom :</td>
                                <td>{nom}</td>
                            </tr>
                            <tr>
                                <td>Prenom :</td>
                                <td>{prenom}</td>
                            </tr>
                            <tr>
                                <td>Num tel :</td>
                                <td>{num}</td>
                            </tr>
                            <tr>
                                <td>Adresse :</td>
                                <td>{ad}</td>
                            </tr>
                            <tr>
                                <td>Mot de passe :</td>
                                <td>{mdp}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Infopersonnelcond