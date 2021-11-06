import {React,  Component } from 'react';
import './style.css';
import im from './bodyinfo/moi.png'
import Pop from './test1/popuptest.js';
import Pop2 from './test2/popuptest.js'



class Espacecour extends Component
{
    state={cours:[{c1:'cour1',q1:'qestion1',q2:'question2',},
    {c1:'cour2',q1:'qestion1',q2:'question2',},
    {c1:'cour3',q1:'qestion1',q2:'question2',},
    {c1:'cour4',q1:'qestion1',q2:'question2',},



],}
    render(){
        return(
        
            <div >
                <fieldset style={{ backgroundImage: `url(${im})` }} className='field-test'>
                <Pop />
                <Pop2/>

                </fieldset>
               
            </div>
          
        )
    }
}
export default Espacecour