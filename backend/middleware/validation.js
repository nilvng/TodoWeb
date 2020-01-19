const Joi = require("@hapi/joi")

const userValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data)    
}

module.exports.userValidation = userValidation