const path = require("path");
const jwt = require("jsonwebtoken")
const  User = require("../models/User.js")
const pagesFolder = '../../public/pages';

function handleErrors(err){
  console.log(err)
    const errors =  {username: "", password: ""}
   if(err.code === 11000){
        errors.username = "Korisnicko ime zauzeto"
        return errors
    }

    if(err.message ===  "Unesite ispravno korisnicko ime"){
  errors.username = err.message
 }

   if(err.message ===  "Lozinke moraju biti iste" || 
      err.message ===  "Unesite ispavnu lozinku"){
    errors.password = err.message
   }


   if(err.message.includes("user validation failed")){
    Object.values(err.errors).forEach(({properties}) =>{
        errors[properties.path] = properties.message;
        console.log(errors[properties.path]);
        console.log(properties.message)
    })
}
   return errors
}

const maxAge = 3* 24* 60 *60;

const createToken = function(id){
    return jwt.sign({id}, "quiz secret", {expiresIn: maxAge})
}


module.exports.home_get = (req, res) => {
    res.render("home")
}

module.exports.game_get = (req, res) => {
    res.render("game")
  }

  module.exports.login_get = (req, res) => {
    res.cookie("jwt", "",{maxAge: 1})
    res.render("login")
  }

  module.exports.signup_get = (req, res) => {
    res.cookie("jwt", "",{maxAge: 1})
    res.render("signup")
  }

  module.exports.logout_get = (req, res) => {
    res.cookie("jwt", "",{maxAge: 1})
    res.redirect("/login")
  }


  module.exports.local_get = (req, res) => {
    res.render("login")
  }

  module.exports.login_post = async(req, res) => {
    const {username, password} = req.body;
   try{
    const user = await User.login(username, password);
    const token  = createToken(user._id);
    res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000})
    res.status(200).json({url: "home", user: username})
}
   catch(err){
    const errors = handleErrors(err)
    res.status(400).json({errors})
   }
  }

  module.exports.signup_post = async(req, res) => {
    const {username, password, confirmPassword} = req.body;
   try{
    if(password !== confirmPassword) {
        throw new Error( "Lozinke moraju biti iste")
    }
    const user = await User.create({username, password})
    const token = createToken(user._id);
    res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000})
    res.status(200).json({url: "game", user: user.username})
}
   catch(err){ 
    const errors = handleErrors(err)
    res.status(400).json({errors})
   }

  }