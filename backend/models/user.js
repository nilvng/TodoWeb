let mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
let UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
},
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

let SALT = 10
UserSchema.pre("save",function(next){
    var user = this
    if (user.isModified('password')){
        bcrypt.genSalt(SALT, (err,salt)=>{
            if (err) return next(err)
            bcrypt.hash(user.password,salt,(err,hashed)=>{
                if (err) return next(err)
                user.password = hashed;
                next()
            })
        })
    }else next()
})

var User = module.exports = mongoose.model('user',UserSchema)

module.exports.get = function(cb,limit){
    User.find(cb).limit(limit)
}