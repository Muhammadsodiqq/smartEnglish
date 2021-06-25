const router  = require("express").Router() 


router.get("/", (req,res) => {
	res.render("contact")
})

module.exports = {
	path:"/contact",
	router
}