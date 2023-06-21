import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `mongo db is connected ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in mongodb &{error}`);
  }
};

export default connectDB;
