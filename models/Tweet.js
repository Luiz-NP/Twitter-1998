const mongoose = require("mongoose");

const Tweet = new mongoose.Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    content: {
        type: String,
        required: true,
        min: 1
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    timestamps: true
});

mongoose.models = {}; 

export const TweetModel = mongoose.model.Tweet || mongoose.model("Tweet", Tweet);