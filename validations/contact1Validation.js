const Joi = require("joi")

module.exports = Joi.object({
	name:Joi.string()
        .required()
        .max(64)
        .min(3)
        .error(Error('name is incorrect')),
    phone:Joi.string()
        .pattern(/^9989[012345789][0-9]{7}$/)
        .required()
        .error(Error("phone is incorrect")),
    email:Joi.string()        
    	 .required() 
    	 .pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)	
    	 .error(Error("email is incorrect")),
    age:Joi.string()
    	.required()
    	.max(3)
        .error(Error("age is incorrect")),
})