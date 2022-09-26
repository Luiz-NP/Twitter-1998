const mongoose = require("mongoose");

const Tweet = new mongoose.Schema({

    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    ownerName: {
        type: String,
        required: true,
    },

    ownerUsername: {
        type: String,
        required: true,
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