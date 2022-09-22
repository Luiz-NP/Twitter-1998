import mongoose from "mongoose";

export const connect = mongoose.connect(process.env.DB_URL,
{
    useNewUrlParser: true,    
    useUnifiedTopology: true  
},
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
);