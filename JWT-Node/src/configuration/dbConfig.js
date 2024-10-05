const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://TarunSingh:TarunSingh1@cluster1.iuilj.mongodb.net/",{
    serverSelectionTimeoutMS: 5000
});

mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error",(err)=>{
    console.log(`MongoDB connection error: ${err}`)
});

module.exports=mongoose;