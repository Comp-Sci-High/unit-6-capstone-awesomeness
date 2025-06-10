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

// missing model
const multiplehoice = mongoose.model ("mcquestion", mcquestionSchema, "mcquestions")



const shortresponseSchema = new mongoose.Schema(
    {
        name : {type: String, require: true},
        question: {type: String, require: true},
        image: {type: String},
        guide: {type: String}
    }
) 

// missing the model
const short = mongoose.model ("shortresponse", shortresponseSchema, "shortresponse")





// create shcema and model for long essay

const essaySchema  = new mongoose.Schema(
    {
        Document1 : {type: String, require: true},
        imagedoc1: {type: String},

        Document2 : {type: String, require: true},
        imagedoc2: {type: String},

        Document3 : {type: String, require: true},
        imagedoc3: {type: String},

        Document4 : {type: String, require: true},
        imagedoc4: {type: String},

        Document5 : {type: String, require: true},
        imagedoc5: {type: String},

        Document6 : {type: String, require: true},
        imagedoc6: {type: String},

        name : {type: String, require: true},

        question: {type: String, require: true},

        image: {type: String},

        guide: {type: String}
    }
) 

const essay = mongoose.model ("essay", essaySchema, "essays")



app.get("/", async (req, res) =>{
    // just be a home page not ejs, that redirects them to 3 pages
    // one for mc, one for short respoonse, one for essays
    // res.render("home.ejs")
    // res.sendFile()
res.sendFile(__dirname + "public/inde.html")


})

// Create 3 HTML files (they will later be turned to EJS) one for each mc, short,essay 

// all of these routes hsould be using Models to pull data from monogoDB

app.get("/multiplehoice", async (req,res) =>{
    const questions = await McQuestion.find()
    res.render("multiplechoice", {questions})
})

app.get("/shortresponse", async (req,res) =>{
  const questions = await Essay.find()
    res.render("shortresponse", {questions})
})

app.get("/essay", async (req,res) =>{
  const questions = await Essay.find()
    res.render("essay", {questions})
})

app.post("/teacher", async (req, res) =>{
    const post = question
    // this is a form to add questions 
    // you nbeed 3 html pages one for each questyion type 
})

async function startServer() {
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.3rbns.mongodb.net/monica?retryWrites=true&w=majority&appName=Cluster0");

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

startServer();
