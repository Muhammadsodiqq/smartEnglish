module.exports =  class home {
	static async AboutController (req,res) {
		try {
			let x = await req.postgres.about_model.update({
				message:req.body.about
			},{
				where:{
					id:req.body.id
				}
			})
			res.redirect("/admin")
		}catch (e) {
			res.redirect("/admin")
		}
	}

	static async addadultsController(req,res) {
		try{
			let x = await req.postgres.courses_model.create({
				title:req.body.title,
				message:req.body.info
			})
			res.redirect("/admin")
		}catch (e) {
			if(String(e).includes('SequelizeUniqueConstraintError: Validation error')) {
				e = "title is already exists, the title is unique"
			}
			let users = await req.postgres.contact2_model.findAll()
			let users2 = await req.postgres.contact1_model.findAll()
			let about = await req.postgres.about_model.findAll()

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
				error:e + ""
			})
		}
	}

	static async editadultsController(req,res) {
		try{
			let x = await req.postgres.courses_model.update({
				title:req.body.new_title,
				message:req.body.info
			}, {
				where:{
					title:req.body.title
				}
			})
			res.redirect("/admin")
		}
		catch (e) {
			if(String(e).includes('SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "statistics_title_key"')) {
				e = "title is already exists, the title is unique"
			}
			let users = await req.postgres.contact2_model.findAll()
			let users2 = await req.postgres.contact1_model.findAll()
			let about = await req.postgres.about_model.findAll()
			let news = await req.postgres.Home_News_model.findOne()
			let newsId = news.dataValues.id
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
				newsId,
				error:e + ""
			})

		}
	}

	static async addStatisticsController(req,res) {
		try{
			let x = await req.postgres.statistics_model.create({
				title:req.body.title,
				number:req.body.number
			})
			res.redirect("/admin")
		}catch (e) {
			if(String(e).includes('SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "statistics_title_key"')) {
				e = "title is already exists, the title is unique"
			}
			let users = await req.postgres.contact2_model.findAll()
			let users2 = await req.postgres.contact1_model.findAll()
			let about = await req.postgres.about_model.findAll()
			let news = await req.postgres.Home_News_model.findOne()
			let newsId = news.dataValues.id
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
				newsId,
				error:e + ""
			})
		}
	}

	static async deleteStatisticsController(req,res) {
		try{
			let x = await req.postgres.statistics_model.destroy({
				where:{
					title:req.body.title,
				}
			})
			res.redirect("/admin")
		}catch (e) {
			if(String(e).includes('SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "statistics_title_key"')) {
				e = "title is already exists, the title is unique"
			}
			let users = await req.postgres.contact2_model.findAll()
			let users2 = await req.postgres.contact1_model.findAll()
			let about = await req.postgres.about_model.findAll()
			let news = await req.postgres.Home_News_model.findOne()
			let newsId = news.dataValues.id
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
				newsId,
				error:e + ""
			})
		}
	}

	

	static async edithomeNewsController(req,res) {
		try{
			let x = await req.postgres.Home_News_model.update({
				title:req.body.new_title,
				message:req.body.info
			}, {
				where:{
					title:req.body.title
				}
			})
			res.redirect("/admin")
		}
		catch (e) {
			if(String(e).includes('SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "statistics_title_key"')) {
				e = "title is already exists, the title is unique"
			}
			let users = await req.postgres.contact2_model.findAll()
			let users2 = await req.postgres.contact1_model.findAll()
			let about = await req.postgres.about_model.findAll()
			let news = await req.postgres.Home_News_model.findOne()
			let newsId = news.dataValues.id
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
				newsId,
				error:e + ""
			})

		}
	}
} 