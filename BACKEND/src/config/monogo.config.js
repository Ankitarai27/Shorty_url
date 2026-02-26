import mongoose from "mongoose";
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_URI (or MONGODB_URI) is not defined");
    }

    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
