import{React,Component} from 'react'
import './stylecompocondidat.css'
import Buttonupdatecandidat from './buttons/buttonupdatecandidat'

class Infopersonnel extends Component{
    render(){
        const {cin , nom, prenom, num, ad , mdp }=this.props
        return(
            <div>
                <fieldset className='info_personnel'>
                    <legend><h1>Information Personel</h1></legend>
                    <table>
                        <tbody>
                        <tr>
                                <td>CIN :</td>
                                <td>{cin}</td>
                                <td></td>
                                <Buttonupdatecandidat cin2={cin} nom2={nom} prenom2 ={prenom} num2={num} ad2={ad}  mdp2={mdp}/>
                            </tr>
                            <tr>
                                <td>Nom :</td>
                                <td>{nom}</td>
                                <td> </td>
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
export default Infopersonnel