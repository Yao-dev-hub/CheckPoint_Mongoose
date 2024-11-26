const express = require("express")
const app = express()
const connexion = require("./ConnexionDB/dbConnexion")
const inscriptionModel = require("./Model/inscriptionModel")
connexion(app)


app.set("view engine","ejs")
app.set("views","pages")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/inscription",(req,res) =>{
    res.render("signup")
})
app.get("/connexion",(req,res) => {
    res.render("login")
})

app.get("/reserver",(req,res) => {
    res.render("reserver")
})

app.use(express.json())

app.post("/signupForm", async (req,res) =>{
    try {
        inscriptionModel.find({email:req.body.email,password:req.body.password})
        .then(data => {
            if(data && data.length>0){
                res.json({message:"Email déjà existant !"})
            }else{
                const inscrit = new inscriptionModel(req.body)
                inscrit.save()
                .then( result => {
                    res.json({message:"ok"})
                })

                .catch(error =>{
                    res.json({message:error.message})
                })
            }

        })
        .catch(error => console.log(error))

    } catch (error) {
        console.log(error)
    }
})


app.post("/loginForm", async (req,res) =>{
    try {
        inscriptionModel.find({email:req.body.email,password:req.body.password})
        .then(data =>{
            console.log(data)
            const result = []
            result.push(data)
            res.json({message:"ok",id:result[0]._id,nom:result[0].nom})
        })
        .catch(error => {
            res.json({message:"Email ou mot de passe incorrect !"})
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
})