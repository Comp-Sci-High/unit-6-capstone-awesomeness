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

const questionSchema = new mongoose.Schema(
    {
        name : {type: String, },
        question: {type: String, Unique: "true"},
        image: {type: String, Unique: "true"},
        questionA: {type: String, Unique: "true"},
        questionB: {type: String, Unique: "true"},
        questionC: {type: String, Unique: "true"},
        questionD: {type: String, Unique: "true"},
        Correctquestion: {type: String, Unique: "true"}
    }
)  


async function startServer() {
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.3rbns.mongodb.net/monica?retryWrites=true&w=majority&appName=Cluster0");

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

startServer();
