import React,{useState} from 'react';
import Bunny from "./bunny.png";

const Fortunecard=({fortuneCard})=> {
  const [turn,setTurn] = useState(false)
 return(
   <div 
   className={`card ${turn? 'turn':""}`}
   onClick={()=>setTurn(!turn)}>
     <div className="front-side">
       <img className="bunny" src={Bunny} height={100} width={100} />
       <div className="fortune-lines-front">
         <p>Bunny is here to tell your fortune</p>
         <p>😁</p>
       </div>
     
     </div>
     
     <div className="back-side">
       <img src={fortuneCard.image} className="bunny-back" height ={90} width ={90}     />
       <p className="fortune-lines-back">{fortuneCard.fortuneLines}</p>
       </div>
   </div>

 )
     }


export default Fortunecard;
    