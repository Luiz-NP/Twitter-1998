require("../../db/mongoose");
import { TweetModel } from "../../models/Tweet";

export default async (req, res) => {
    const { ownerId, content, ownerName, ownerUsername } = req.body;

    const tweet = await TweetModel.create({ ownerId, content, ownerName, ownerUsername });
    if (!tweet) return res.json({ message: "Unable to create tweet." });

    res.json({ tweet });

}