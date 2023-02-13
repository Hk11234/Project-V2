const mongoose = require("mongoose");
const db = require("./index.js");

const rentSchema = new mongoose.Schema({
  location:String,
  rooms: Number,
  contact:String,
  description:String,
  image:String
},{ timestamps: true });

const Rent = mongoose.model("Rent", rentSchema);


const selectAll=()=>{
  return Rent.find({}).sort({createdAt:-1})
}

const selectOne=(name)=>{
  return Rent.findOne(name)
}

const create=(body)=>{
  return Rent.create(body);
}

const deleted=(id)=>{
  return Rent.findByIdAndDelete(id)
}

const updated=(id,body)=>{
    return Rent.findByIdAndUpdate(id,body)
}

module.exports ={
  selectAll,
  selectOne,
  create,
  deleted,
  updated
}



