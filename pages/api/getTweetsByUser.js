require("../../db/mongoose");
import { TweetModel } from "../../models/Tweet";

export default async (req, res) => {

    const { ownerId } = req.body;

    const tweets = await TweetModel.find({ownerId}).sort({"createdAt": -1});
    if (!tweets) return res.json({error: "Could not load tweets."});

    res.status(200).json({ tweets });
}