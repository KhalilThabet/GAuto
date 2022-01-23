import{React,Component} from 'react'
import './stylecompocondidat.css'
import Buttonupdateexamen from '../Buttons/UpdateExam'
class Prochaineexamen extends Component{
    render(){
        const {cin,date,heure,type}=this.props
        return(
            <div>
                <fieldset className='prochaine-examen'>
                    <legend><h1>Prochain Examen</h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>Date:</td>
                                <td>{date}</td>
                                <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </td>
                                <td><Buttonupdateexamen cin3={cin} /></td>
                            </tr>
                            <tr>
                                <td>Heure:</td>
                                <td>{heure}</td>
                            </tr>
                            <tr>
                                <td>Type d'examen : </td>
                                <td>{type}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Prochaineexamen