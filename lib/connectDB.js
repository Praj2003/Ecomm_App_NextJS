import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

console.log("MONGODB_URI from .env.local:", MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const ConnectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    let opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(() => {
      return mongoose.connection;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("Connected to Database: ", cached.conn.name);
  } catch (error) {
    cached.promise = null;
    console.error("Database connection failed", error);
    throw new Error(error);
  }

  return cached.conn;
};

export default ConnectDB;
