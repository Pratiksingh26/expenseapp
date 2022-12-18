import express from "express"
import connect from "./database/mongodb.js"
import cors from "cors"
import bodyParser from "body-parser"
import Transaction from "./models/transaction.js"
import TransactionRouters from "./routes/transactions.js"
import Auth from "./routes/Auth.js"


const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())




app.get("/", (req,res) => {
    res.send("Hello world!")
});

await connect();

app.use("/transaction", TransactionRouters)
app.use("/auth", Auth)


app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:4000")
})