import connect from "../../db/connect";

export default async (req, res) => {
    const { db } = await connect();
    const { username, password } = req.body;

    const validUser = await db.collection("users").findOne({ username });
    if (!validUser) res.status(400).json({error: "User not found."});

    const validPassword = await db.collection("users").findOne({ password });
    if (!validPassword) res.status(400).json({error: "Invalid Password."});

    res.status(200).json({success: "Logged."})
}
