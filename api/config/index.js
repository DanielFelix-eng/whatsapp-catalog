import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;

if (!mongoUri) {
  throw new Error('MONGO_URI (or legacy MONGO_URL) is not set in environment variables')
}

export default {
  mongoUri,
  connect: async () => {
    if (mongoose.connection.readyState === 1) return mongoose.connection;
    return mongoose.connect(mongoUri);
  }
};