import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: {type:Number},
    description:{type:String},
    date: {type: Date, default: new Date()},

},{
    versionKey: false,
    timestamps:true,
})

export default new mongoose.model("Transaction",transactionSchema)