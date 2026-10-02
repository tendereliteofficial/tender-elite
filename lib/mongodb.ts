import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing in .env.local");
}

if (
  !uri.startsWith("mongodb://") &&
  !uri.startsWith("mongodb+srv://")
) {
  throw new Error(
    "Invalid MONGODB_URI. It must start with mongodb:// or mongodb+srv://"
  );
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

const client = new MongoClient(uri, options);

const clientPromise = client.connect();

export default clientPromise;