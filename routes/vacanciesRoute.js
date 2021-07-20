const router  = require("express").Router() 


router.get("/", (req,res) => {
	res.render("vacancies")
})

module.exports = {
	path:"/vacancies",
	router
}