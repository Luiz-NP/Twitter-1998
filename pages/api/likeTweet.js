require("../../db/mongoose");
import { TweetModel } from "../../models/Tweet";

export default async (req, res) => {
    const { tweetId, ownerId, liked } = req.body;

    liked ? await TweetModel.findByIdAndUpdate(tweetId, {$push: {likes: { ownerId }}})
            .then(res => console.log(res))
            .catch(error => console.log(error))
          
          : await TweetModel.findByIdAndUpdate(tweetId, {$pull: {likes: { ownerId }}})
            .then(res => console.log(res))
            .catch(error => console.log(error))
}