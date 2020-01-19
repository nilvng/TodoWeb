const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
module.exports = function(req,res,next){
    const token = req.header("authToken")
    if (!token) return res.status(401).send("Access denied")
    try {
        const verified = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        req.user = verified.username
        next()
    } catch (err){
        res.status(403).send("invaid token")
    }
}