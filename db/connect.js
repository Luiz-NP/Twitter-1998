import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function connect() {
    if(!client.connect()) await client.connect();
    
    const db = client.db("database");

    return { db, client};
}