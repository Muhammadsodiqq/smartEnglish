const router  = require("express").Router() 


router.get("/", (req,res) => {
	res.render("vacansiec")
})

module.exports = {
	path:"/vacansiec",
	router
}