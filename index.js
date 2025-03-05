const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||3000;

//MiddleWare
app.use(express.json());

//Import Route Files
const blog=require("./routes/blog");

//mount
app.use("/api/v1",blog);

//Connect with the DB
const connectWithDb=require("./config/database");
connectWithDb();

//Start the Server
app.listen(PORT,()=>{
    console.log(`App is started at PORT no ${PORT}`);
})


//Default route 
app.get("/",(req,res)=>{
    res.send('<h1>This is the Default HomePage </h1>');
})




