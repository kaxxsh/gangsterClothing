import { connect } from "mongoose";

let cached = { conn: null, promise: null };

const dbConnection = async () => {
  try {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };
      cached.promise = connect(process.env.NEXT_PUBLIC_MONGO_URL, opts);
    }

    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    }

    return cached.conn;
  } catch (error) {
    console.log("Error in connecting to DB", error);
  }
};

export default dbConnection;
