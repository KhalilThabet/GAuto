import {React,useState,useEffect} from 'react';
import './style3.css';
import Infoveh from './vehcompo/infoveh';
import Buttonajouter from './vehcompo/bouttonajouter/buttonajouter.js';
import im from './mii2.png'



export default function Veh1()
{
    const [searchteam,setsearchteam]=useState("");
    const [id1,setid1]=useState('');
    const [id2,setid2]=useState('');
    const [id3,setid3]=useState('');
    const [id4,setid4]=useState('');
    const [id5,setid5]=useState('');
    const [id6,setid6]=useState('');
    const [id7,setid7]=useState('');
    const [id10,setid10]=useState('');
    const [id12,setid12]=useState('');
    const [id13,setid13]=useState('');
    const [id8,setid8]=useState('');
    const [id9,setid9]=useState('');
    const [id11,setid11]=useState('');

    const day=new Date();
    const [datas,setdatas]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
		if(!isLoaded){
		   console.log("loaded")
			fetch("http://localhost:8000/api/vehicules").then(response=>
				response.json()
				)
			.then(data=>{
				setIsLoaded(true)
				setdatas(data)
				console.log(data)
				})
			.catch(err=>{
				console.log(err)
			})
		 
		}
    })

        return(
            <div>
                <fieldset className='infoveh' >
                    
                    <div className='blocrecherche'>
                       <input type='text' id='rechercheveh' placeholder='Rechercher (Marque)' onChange={ event =>{setsearchteam(event.target.value); }} />
                       <Buttonajouter/> 
                   </div>
         
                    {datas.filter((val)=>{
                      return val.marque.toLowerCase().startsWith(searchteam.toLowerCase());
                          }).map((val,key)=>{ 
                           return (<div key='val.immatricule' id='listeveh'>
                                   <table>
                                      <tbody>
                                         <tr>
                                            <button id='tv' onClick={(e)=>{
                                                setid1(val.assurance)
                                                setid2(val.immatricule)
                                                setid3(val.visiteTechnique)
                                                setid4(val.marque)
                                                setid5(val.modele)
                                                setid6(val.vignette)
                                                setid7(val.vidange)
                                                setid8(val.filtre)
                                                setid9(val.freinage)
                                                setid10(val.pneues)
                                                setid11(val.courroies)
                                                setid12(val.service)
                                                setid13(val.nbCheveau)


                                                const d1=new Date(val.assurence)
                                                const d2=new Date(val.visiteTechnique)
                                                const d3=new Date(val.vignette)
                                                const d4=new Date(val.vidange)
                                                const d5=new Date(val.filtre)
                                                const d6=new Date(val.freinage)
                                                const d7=new Date(val.pneues)
                                                const d8=new Date(val.courroies)


                                                let ch= val.immatricule+'   '+val.marque+'\n'
                                                const cc=ch;
                                                if(d1<day) ch=ch+'-la validite d assurence est expireé \n'
                                                if(d2<day) ch=ch+'-la validite de visite est expireé \n'
                                                if(d3<day) ch=ch+'-la validite de vignette est expireé \n'
                                                if(d4<day) ch=ch+'- vidange est demendées\n '
                                                if(d5<day) ch=ch+'-les filtres  \n'
                                                if(d6<day) ch=ch+'-le systeme de freinage \n'
                                                if(d7<day) ch=ch+'-les pneues \n'
                                                if(d8<day) ch=ch+'-les courroies'
                                                if(ch!==cc) alert(ch)
                                                
                                                
                                                
                                                    }}   >

                                            {val.immatricule}  -  {val.marque} 
                                            </button>
                                         </tr>
                                    </tbody>
                                    </table>
                                    </div>)
                                   })}
                </fieldset>
                <fieldset className='bodyinfoveh' style={{ backgroundImage: `url(${im})` }}  >
                <Infoveh imm={id2} modele={id5} marque={id4}
                vignette={id6} assurence={id1} visite={id3} vidange={id7} 
                filtre={id8} freinage={id9} pneues={id10} courroies={id11}
                service={id12} nbCheveau={id13}

                />
                
                </fieldset>
                

                
            </div>
        
        )

}
