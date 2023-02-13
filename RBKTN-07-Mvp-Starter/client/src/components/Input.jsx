import React , {useState} from 'react'

const Input = (props) => {
    console.log('front',props);
    const [prop,setProp]=useState({
        location:"",
        rooms:"",
        contact:"",
        description:""
        ,image:""})

    const handleChange=(e)=>{
        setProp({...prop,[e.target.name]:e.target.value})
        console.log(prop);
    }

    const createItem = (e) => {
        e.preventDefault()
         props.create({...prop})
       }

  return (
    <div id="create1"> 
      <form id="form" onSubmit={createItem}>
            <input type="text" name="location" placeholder="Enter a city" onChange={handleChange}/> <br/>
            <input type="text" name="rooms"  placeholder="Enter a rooms Num" onChange={handleChange}/> <br/>
            <input type="text" name="contact"  placeholder="Enter a contact" onChange={handleChange}/> <br/>
            <input type="text" name="description"  placeholder="Enter a description" onChange={handleChange}/> <br/>
            <input type="text" name="image"  placeholder="Enter an image" onChange={handleChange}/> <br/>
        <input type="submit" /> ✍
        </form> 
    </div>
  )
}

export default Input;
