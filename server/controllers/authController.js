const path = require("path");
const  User = require("../models/User.js")
const pagesFolder = '../../public/pages';

function handleErrors(err){
    const errors =  {username: "", password: ""}

   if(err.code === 11000){
        errors.username = "Korisnicko ime zauzeto!"
        return errors
    }

   if(err.message ===  "Lozinke moraju biti iste"){
    errors.password = err.message
   }

   if(err.message.includes("user validation failed")){
    Object.values(err.errors).forEach(({properties}) =>{
        errors[properties.path] = properties.message;
    })
}
   return errors
}

module.exports.home_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'index.html'));
}

module.exports.game_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'game.html'));
  }

  module.exports.login_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'login.html'));
  }

  module.exports.signup_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'signup.html'));
  }


  module.exports.local_get = (req, res) => {
    res.redirect("/login")
  }
  module.exports.login_post = async(req, res) => {
    const {username, password} = req.body;
   try{
    const user = await User.create({username, password})
    res.status(200).json({url: "game", user: user.username})
}
   catch(err){
    handleErrors(err)
   }
  }

  module.exports.signup_post = async(req, res) => {
    const {username, password, confirmPassword} = req.body;
   try{
    if(password !== confirmPassword) {
        throw new Error( "Lozinke moraju biti iste")
    }
    const user = await User.create({username, password})
    res.status(200).json({url: "game", user: user.username})
}
   catch(err){
    const errors = handleErrors(err)
    console.log(errors)
    res.status(400).json({errors})
   }

  }