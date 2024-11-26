const mongoose = require("mongoose")

const connexion = async (serveur) =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/',{
            dbName:"Cinema"
        })
        serveur.listen(2500,() => console.log('serveur lancé sur le port 2500'))
    } catch (error) {
        console.log(error)
    }
}

module.exports=connexion