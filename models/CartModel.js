import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    brand : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    quantity : {
        type : Number,
        Default : 1,
        required : true
        
    }
},{timestamps : true,versionKey : false});

export default mongoose.models.Cart || mongoose.model("Cart",cartSchema);