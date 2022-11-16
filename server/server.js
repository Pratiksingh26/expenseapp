import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const PORT = 4000
const app = express()

app.use(cors)

mongoose.connect("mongodb+srv://pratik:pratik123@expense-app.4yslzic.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("MongoDB connection is succesfull")).catch((err) => console.error(err))

app.get("/", (req,res) => {
    res.send("Hello world!")
})

app.listen(PORT, ()=> {
    console.log("Server is runnung on http://localhost:4000")
})