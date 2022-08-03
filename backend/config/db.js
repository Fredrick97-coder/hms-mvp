import mongoose from 'mongoose';

const connectDBase = async () => {
  try {
    await mongoose
      .connect(process.env.LOCAL_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('database is connected');
      });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
