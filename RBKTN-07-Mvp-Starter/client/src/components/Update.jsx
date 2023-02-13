import React, { useState } from "react";

const Update = (props)=>{
    const [upd,setUpd]=useState({
    location:"",
    rooms:"",
    contact:"",
    description:""
    ,image:""})

    const handleChange=(e)=>{
        console.log(e.target.value);
        setUpd({...upd,[e.target.name]:e.target.value})
    }

  const updateItem = (e) => {
      e.preventDefault()
    props.updated(props.id,{...upd})
  }

  return (
    <div> 
      <form id="form" onSubmit={updateItem}>
      <input type="text" name="location" placeholder="Enter a location" onChange={handleChange}/> <br/>
            <input type="text" name="rooms"  placeholder="Enter a rooms Num" onChange={handleChange}/> <br/>
            <input type="text" name="contact"  placeholder="Enter a contact" onChange={handleChange}/> <br/>
            <input type="text" name="description"  placeholder="Enter a description" onChange={handleChange}/> <br/>
            <input type="text" name="image"  placeholder="Enter an image" onChange={handleChange}/> <br/>
        <input type="submit" /> ✍
        </form> 
    </div>
  )
}
export default Update ; 
