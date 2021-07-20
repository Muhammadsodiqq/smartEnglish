const router  = require("express").Router() 


router.get("/",async (req,res) => {
	let x = await req.postgres.News_model.findAll()
	let newsArr = []
	for(let i of x) {
		newsArr.unshift(i.dataValues)
	}
	console.log(newsArr);
	res.render("news", {
		news: newsArr
	})
})

module.exports = {
	path:"/news",
	router
}