const router  = require("express").Router() 


router.get("/", async(req,res) => {
	let about = await req.postgres.about_model.findAll()
	let adults = await req.postgres.courses_model.findAll()
	let statistic = await req.postgres.statistics_model.findAll()
	let news = await req.postgres.Home_News_model.findOne()
	let newss = (news.dataValues)
	console.log(newss);
	let courses = []
	for(let i of adults) {
		courses.push(i.dataValues)
	}
	let staix = []
	for(let i of statistic) {
		staix.push(i.dataValues)
	}

	let x 
	if(about) x = about[0]?.dataValues?.message
	res.render("index", {
		error:" ",
		about:about ? x : "",
		courses,
		statistic: staix,
		news: newss
	})
})


module.exports = {
	path:"/",
	router
}