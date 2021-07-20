const router  = require("express").Router() 
const contact2Validation = require("../validations/contact2Validation.js")

router.get("/", (req,res) => {
	res.render("contact", {
		error:""
	})
})

router.post("", async (req,res) => {
	try{
		let {name,email,phone,message} =await contact2Validation.validateAsync(req.body)
		let x = await req.postgres.contact2_model.create({
			name,
			email,
			phone,
			message
		})
		res.redirect("/contact")
	}catch(e) {
		if(e + "" == 'SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "contact2s_email_key"') {
			e = "email is already exists"
		}
		
		else if(e + "" == 'SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "contact2s_phone_key"') {
			e = "phone is already exists"
		}

		else if (String(e).includes("Error:")) {
			e = String(e).replace('Error:', "")
		}
		console.log(e)
		res.render("contact", {
			error:e + ""
		})
	}
})

module.exports = {
	path:"/contact",
	router
}

