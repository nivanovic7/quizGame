const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Molimo unesite korisnicko ime"],
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true, "Molimo unesite lozinku"],
        minlength: [6, "Lozinka mora imati najmanje 6 karaktera"]
    }
})

userSchema.pre("save", async function(next){
    const salt=  await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("user", userSchema)
module.exports = User;