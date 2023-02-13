import React, { useState } from 'react';
import Update from './Update.jsx';

const ListItem = (props) => {
  const [up,setUp] = useState(false)
  
    const clickRemove = ()=>{
      props.deleted(props.rent._id)
    }
  
  
    return (
  <div id="allList" >
    <img id="image1" src={props.rent.image}/>
    <p>{props.rent.location}</p>
    <p>{ props.rent.description}</p>
    <p>{props.rent.rooms}</p>
    <p><b>{props.rent.contact}</b></p> 
    <button id="delete" className='button1' onClick={clickRemove}><span>Delete</span></button><br/>
    <button id="upload" className='button2' onClick={()=>{setUp(!up)}}>Update</button>
    <div>
      {up && <Update updated={props.updated} id ={props.rent._id} up={setUp}/>}
     </div>
  </div>
)}

export default ListItem;