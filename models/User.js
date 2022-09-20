const mongoose = require("mongoose");

const User = new mongoose.Schema({
    
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        max: 32
    },

    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
},
{
    timestamps: true
});

mongoose.models = {}; 

export const UserModel = mongoose.model.User || mongoose.model("User", User);
