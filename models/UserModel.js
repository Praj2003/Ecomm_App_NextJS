import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    
    role: {
      type: String,
      default: "user",
    },
    profilepic: {
      type: String,
    },

    coverpic: {
      type: String,
    },

    razorpayid: {
      type: String,
      default : "None"
    },

    razorpaysecret: {
      type: String,
      default : "None"
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
