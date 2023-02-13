import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import axios from 'axios'
import Create from './components/Create.jsx'

const App = () => {
  const [rents, setRents] = useState([])
  const [add,setAdd] = useState(false)
  useEffect(() => {
    $.ajax({
      url: '/api/rent',
      success: (data) => {
        console.log(data)
        setRents(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [add])

  const createRent =(body) => {
    console.log("body",body);
    axios
    .post('/api/rent', body)
     .then((result) => {
      console.log(result);
      setAdd(!add)
    }).catch(err => {
      console.log(err);
    })
   }

   const deleteRent = (id) => {
    axios
    .delete(`/api/rent/${id}`)
     .then((result) => {
     console.log(result) 
     setAdd(!add);
    }).catch(err => {
      console.log(err);
    })
  }

  const updateRent = (id,body) => {
    axios
     .put(`/api/rent/${id}`, body)
     .then((result) => {
       console.log(result) 
        setAdd(!add);
      }).catch(err => {
        console.log(err);
      })
   }

  return  (
    <div id="header">
      <img id ="sign" src="https://file.removal.ai/preview/tmp-63e96484a559d.png"  />
      <p id="title">FOR RENT</p>
      <p id="quote">An Easy Way To Solve Not Easy Task </p>
      <Create create={createRent}/>
      <img id="img" src="https://getwallpapers.com/wallpaper/full/f/2/a/37562.jpg" />
      <p id="ligne">__  __</p>
      <p id="search">Find In</p>
      <List rents={rents} deleted={deleteRent} updated={updateRent}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
