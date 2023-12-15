import mongoose from "mongoose";

let isConnected = false;

export const connectoToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongo Db is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Mongo Db Connected");
  } catch (error) {
    console.log(error);
  }
};
