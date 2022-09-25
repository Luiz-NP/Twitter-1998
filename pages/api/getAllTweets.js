require("../../db/mongoose");
import { TweetModel } from "../../models/Tweet";

export default async (req, res) => {

    const tweets = await TweetModel.find().sort({"createdAt": -1});
    if (!tweets) return res.json({error: "Could not load tweets."});

    res.status(200).json({ tweets })
}