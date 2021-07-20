const router  = require("express").Router() 
const home  = require("../controllers/homeController.js")
const news  = require("../controllers/newsController.js")
const about  = require("../controllers/aboutController.js")
const upload = require("express-fileupload")
const path = require("path");
router.get("/", async(req,res) => {
	let users = await req.postgres.contact2_model.findAll()
	let users2 = await req.postgres.contact1_model.findAll()
	let about = await req.postgres.about_model.findAll()
	let news = await req.postgres.Home_News_model.findOne()
	let newsId = news.dataValues.title
	
	let id
	let arr = []
	if(about) {
		id = about[0]?.dataValues?.id
		
	} 
	
	if(users) {
		for(let i of users) {
			arr.unshift(i.dataValues)
		}
	}
	
	
	let arr2 = []
	
	if(users2) {
		for(let i of users2) {
			arr2.unshift(i.dataValues)
		}
	}
	
	res.render("admin", {
		data: (users ? arr : ""),
		data2: (users2 ? arr2 : ""),
		id:(about ? id : ""),
		newsId:newsId,
		error: ""
	})
})

router.post("/contact/delete", async (req,res) => {
	try{
		let x = await req.postgres.contact2_model.destroy({
			where:{
				email:req.body.delete
			}
		})
		res.redirect("/admin")
	}catch (e) {
		console.log(e)
	}
})


router.post("/contact1/delete", async (req,res) => {
	try{
		let x = await req.postgres.contact1_model.destroy({
			where:{
				email:req.body.delete
			}
		})
		res.redirect("/admin")
	}catch (e) {
		console.log(e)
	}
})


router.post("/about", home.AboutController)
router.post("/courses", home.addadultsController)
router.post("/edit/courses", home.editadultsController)
router.post("/add/statistics", home.addStatisticsController)
router.post("/delete/statistics", home.deleteStatisticsController)
router.post("/edit/newsHome", home.edithomeNewsController)
router.post("/add/news", news.addNewsController)
router.post("/delete/news", news.deleteNewsController)
router.post("/add", upload(), about.addTeamController)



module.exports = {
	path:"/admin",
	router
}