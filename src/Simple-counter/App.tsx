import { useState } from 'react';
import './SimpleApp.css';

export default function SimpleCounterApp(){
const [number, setNumber] = useState<number>(0);
const IncrementNumber =():void=>{
setNumber(number+1);
}

const DecrementNumber=():void=>{
  setNumber(number-1);
}

const ResetNumber=():void=>{
  setNumber(0);
}

return(
  <>
  <div className="app-coutainer">
    <h2 className="count-title">Couter App</h2>
    <h2 className="count-number">{number}</h2>
    <button onClick={IncrementNumber}>Increment</button>
    <button onClick={DecrementNumber}> Decrement</button>
    <button onClick={ResetNumber}> Reset</button>
  </div>
 
  </>
)
}

// If I press increment- up 1.
//If I press decrement - down 1
//resent back to 0