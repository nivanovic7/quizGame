const jwt = require("jsonwebtoken");
const User = require("../models/User.js")



const requireAuth = function(req, res, next){
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, "quiz secret", function(err,decoded){
            if(err){
                res.render("login")
            }
            else{
                console.log(decoded)
                next();
            }
        })
    }
    else{
        res.render("login")
    }
    
}


const checkUser = function(req, res, next){
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, "quiz secret", async function(err,decoded){
            if(err){
                res.locals.user  = null
                next();
            }
            else{
                // res.locals.user = await User.findById(decoded.id)
                res.locals.user  = await User.findById(decoded.id)

                next();
            }
        })
}else{
    res.locals.user  = null
    next();
}
}
module.exports = {requireAuth, checkUser}