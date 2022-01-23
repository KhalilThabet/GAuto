import{React,Component} from 'react'
import '../stylecompocondidat.css'
import UpdateUser from '../Buttons/UpdateUser'

class PersonnelInformations extends Component{
    render(){
        const { CIN , LastName, FirstName, PhoneNumber, Adress , Password }=this.props
        return(
            <div>
                <fieldset className='info_personnel'>
                    <legend><h1>Personnel Informations</h1></legend>
                    <table>
                        <tbody>
                        <tr>
                                <td> CIN :</td>
                                <td>{CIN}</td>
                                <td></td>
                                <UpdateUser cin2={ CIN } nom2={ LastName } prenom2 ={ FirstName } num2={ PhoneNumber } ad2={ Adress }  mdp2={ Password }/>
                            </tr>
                            <tr>
                                <td> Last Name :</td>
                                <td>{LastName}</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td> First Name :</td>
                                <td>{FirstName}</td>
                            </tr>
                            <tr>
                                <td> Phone Number :</td>
                                <td>{PhoneNumber}</td>
                            </tr>
                            <tr>
                                <td>Adress :</td>
                                <td>{Adress}</td>
                            </tr>
                            <tr>
                                <td>Password :</td>
                                <td>{Password}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default PersonnelInformations