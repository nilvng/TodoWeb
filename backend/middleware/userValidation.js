const userValidation = (data) =>{
    if (data.username.length < 6) return "username is at least 6 characters"
    if (data.username === '' || !data.username) return "username is required"
    if (data.password.length < 6) return "password is at least 6 characters"
    if (data.password === '' || !data.password) return "password is required"
    return null
}
module.exports.userValidation = userValidation