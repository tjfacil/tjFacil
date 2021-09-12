import { MongoClient } from "mongodb";

const queryMongo = async (collectionName, queryParams) => {
  const client = await MongoClient.connect(process.env.MONGO_CONN_STRING);
  const db = client.db();
  const collection = db.collection(collectionName);
  const res = await collection.find(queryParams).toArray();
  client.close();
  return res;
};

export default queryMongo;
