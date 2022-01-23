import{React,Component} from 'react'
import './stylecompocondidat.css'
import Buttonupdateseance from './buttons/buttonupdateseance'

class Prochainescience extends Component{
    render(){
        const {cin,date,heure,type}=this.props
        
        return(
            <div>
                <fieldset className='prochaine-science'>
                    <legend><h1>Prochain Science</h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>Date:</td>
                                <td>{date}</td>
                                <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </td>
                                <td><Buttonupdateseance cin1={cin} /></td>
                                
                            </tr>
                            <tr>
                                <td>Heure:</td>
                                <td>{heure}</td>
                               
                            </tr>
                            <tr>
                                <td>Type de science:</td>
                                <td>{type}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Prochainescience