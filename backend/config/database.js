import mongoose from 'mongoose';

const connectDBase = async () => {
  const connection = await mongoose.connect(process.env.CLOUD_MONGO_URI);
  if (connection) {
    console.log(
      `database is connected on ${connection.connections[0].host}:${connection.connections[0].port}`
    );
    return true;
  } else {
    return false;
  }
};

export default connectDBase;
