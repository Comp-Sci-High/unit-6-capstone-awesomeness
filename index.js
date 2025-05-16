const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const mcquestionSchema = new mongoose.Schema(
    {
        name : {type: String, Unique: true, require: true},
        question: {type: String, require: true},
        image: {type: String, Unique: true},
        questionA: {type: String, require: true},
        questionB: {type: String, require: true},
        questionC: {type: String, require: true},
        questionD: {type: String, require: true},
        Correctquestion: {type: String, require: true}
    }
)  

const shortessaySchema = new mongoose.Schema(
    {
        name : {type: String, require: true},
        question: {type: String, require: true},
        image: {type: String},
        guide: {type: String}
    }
) 

// app.get("/multiplehoice", async (req,res) =>{
//    const mcquestion = await mcquestion.find{mcquestion}
// })

// app.get("/shortessay", async (req,res) =>{
//    const sequestion = await question.find{mcquestion}
// })

// app.get("/essay", async (req,res) =>{
//    const mcquestion = await question.find{mcquestion}
// })



async function startServer() {
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.3rbns.mongodb.net/monica?retryWrites=true&w=majority&appName=Cluster0");

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

startServer();
