import mongoose from "mongoose"

async function connect(){
   await mongoose.connect("mongodb+srv://pratik:pratik123@expense-app.4yslzic.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("MongoDB connection is succesfull")).catch((err) => console.error(err))
}

export default connect;