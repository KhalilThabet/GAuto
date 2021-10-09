import{React,Component} from 'react'
import './stylecompocondidatcond.css'

class Prochaineexamencond extends Component{
    render(){
        const {date,heure,type}=this.props
        return(
            <div>
                <fieldset className='prochaine-examencond'>
                    <legend><h1>Prochain Examen</h1></legend>
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
                                <td>Type d'examen:</td>
                                <td>{type}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Prochaineexamencond