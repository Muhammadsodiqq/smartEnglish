const router  = require("express").Router() 
const contact1Validation = require("../validations/contact1Validation.js")

router.get("/", (req,res) => {
	res.render("courses", {
		error: ""
	})
})


router.post("/", async (req,res) => {
	try{
		
		const {name, email,phone,age} = await contact1Validation.validateAsync(req.body)

		let x = await req.postgres.contact1_model.create({
			name,
			email,
			phone,
			age
		})
		
		res.redirect("/courses")
	}catch(e) {
		if(e + "" == ('SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "contact1s_email_key"')) {
			e = "email is already exists"
		}else if(e + "" == 'SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "contact1s_phone_key"') {
			e = "phone is already exists"
		}else if (String(e).includes("Error:")) {
			e = String(e).replace('Error:', "")
		}
		res.render("courses", {
			error:e + ""
		})

	}
})
module.exports = {
	path:"/courses",
	router
}