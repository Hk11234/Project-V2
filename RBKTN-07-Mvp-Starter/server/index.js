const express = require("express");

const {selectAll,selectOne,create,deleted,updated} = require('../server/database-mongo/Item.model.js');


// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


app.get("/api/rent", (req, res)=> {
  selectAll() 
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/api/rent",(req,res)=>{
  console.log('here',req.body);
  create(req.body)
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
})

app.delete("/api/rent/:id",function(req,res){
  deleted(req.params.id)
  .then((result)=>{
    res.send(result)
   })
   .catch((err)=>{
    console.log(err);
   })
})

app.put("/api/rent/:id",function(req,res){
  updated(req.params.id,req.body)
  .then((result)=>{
    console.log(result);
    res.send(result)
   })
   .catch((err)=>{
    console.log(err);
   })
})





app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
