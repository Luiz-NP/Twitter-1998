require("../../db/mongoose");
import { TweetModel } from "../../models/Tweet";

export default async (req, res) => {
    const { tweetId, ownerId, liked } = req.body;
    let like;

    console.log(liked)

    liked 
     ? await TweetModel.findByIdAndUpdate(tweetId, {$push: {likes: { ownerId }}}, {new: true})
      .then(res => {
        like = res.likes;
      })
      .catch(error => console.log(error))
    
     : await TweetModel.findByIdAndUpdate(tweetId, {$pull: {likes: { ownerId }}}, {new: true})
      .then(res => {
        like = res.likes;
      })
      .catch(error => console.log(error))

      res.json(like);
}