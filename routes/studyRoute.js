const router  = require("express").Router() 


router.get("/", (req,res) => {
	res.render("study")
})

module.exports = {
	path:"/study",
	router
}