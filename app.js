
require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require("./server/config/db");


const app = express();
const PORT = 3000 ;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", require("./server/routes/main"));


connectDB().then(() => {
app.listen(PORT, () => {
    console.log("App listening on port ", PORT);
});
});
