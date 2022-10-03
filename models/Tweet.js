const mongoose = require("mongoose");

const Tweet = new mongoose.Schema({

    ownerId: {
        type: String,
        required: true
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
        ownerId: {
            type: String,
            required: true
        }
    }]
},
{
    timestamps: true
});

mongoose.models = {}; 

export const TweetModel = mongoose.model.Tweet || mongoose.model("Tweet", Tweet);