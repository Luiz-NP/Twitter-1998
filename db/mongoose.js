import mongoose from "mongoose";

export const connect = mongoose.connect("mongodb+srv://L:l92461353@cluster0.v7x8x.mongodb.net/database?retryWrites=true&w=majority",
{
    useNewUrlParser: true,    
    useUnifiedTopology: true  
},
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
);