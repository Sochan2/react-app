import { useState, ChangeEvent } from 'react';


export default function HideShowPassword(){
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleEvent = (e:ChangeEvent<HTMLInputElement>):void=>{
    setPassword(e.target.value);
  };

  // change with state
  const togglePassword = ():void=>{
    setShowPassword((prev)=>!prev);
  }

  

  /*
  revealButton?.addEventListener("click", ()=>{
    textPassword.textareaElement.type = "text";
  });

  */

  return(
    <form>
      <input type={showPassword?"text":"password"} value= {password} onChange = {handleEvent} placeholder = "Enter your password"/>
      <button type="button" onClick={togglePassword}>{showPassword?"Hide":"Reveal"}</button>
    </form>
  )



}


// form -> input field -> if click reveal button, reveal password, not-> hide
//input field use state
//input type-text, and string