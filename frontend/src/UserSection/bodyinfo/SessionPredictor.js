import{React,Component} from 'react'
import './stylecompocondidatcond.css'

class Prochainesciencecond extends Component{
    render(){
        const {date,heure,type}=this.props
        return(
            <div>
                <fieldset className='prochaine-sciencecond'>
                    <legend><h1>Prochain Science</h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>Date:</td>
                                <td>{date}</td>
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
export default Prochainesciencecond