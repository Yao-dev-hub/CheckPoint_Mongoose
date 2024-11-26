const mongoose = require("mongoose")

const inscriptionModel = new mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    age:{type:Number,required:true},
    sexe:{type:String,required:true}
})

module.exports = mongoose.model("UsersInscrit",inscriptionModel)