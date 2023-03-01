const express = require('express')
const mongoose = require("mongoose")
const app = express();
const authRoutes = require("./server/routes/authRoutes.js")
const cookieParser = require("cookie-parser")

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.static("public"));
app.use(express.json());

mongoose.set("strictQuery", true);
const dbUri = "mongodb+srv://admin-nikola:128dsuxcngIsvR21@cluster0.7ez59.mongodb.net/QuaestioDB?retryWrites=true&w=majority"
mongoose.connect(dbUri)
.then(() => app.listen(3000))
.catch(err => console.log(err))

app.use(authRoutes)



