import React, { useState } from "react";
import Input from "./Input.jsx";

const Create =(props)=>{
const [inp,setInp]=useState(false)

    return (
        <div id="creaate">
             <button id="create" onClick={()=>{setInp(!inp)}}><b>CREATE ✍</b></button>
             <div>
      {inp && <Input create={props.create} />}
     </div>
        </div> 
    )
}

export default Create;