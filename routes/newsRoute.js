const router  = require("express").Router() 


router.get("/", (req,res) => {
	res.render("news")
})

module.exports = {
	path:"/news",
	router
}