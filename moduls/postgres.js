const {Sequelize} = require("sequelize")
const contact1Model = require("../models/contact1Model.js")
const contact2Model = require("../models/contact2Model.js")
const aboutModel = require("../models/aboutModel.js")
const AboutCoursesModel = require("../models/AboutCoursesModel.js")
const statisticsModel = require("../models/statisticsModel.js")
const newsModel = require("../models/newsModel.js")
const newsMModel = require("../models/news.js")
const teamMModel = require("../models/teamModel.js")
const sequelize = new Sequelize("postgres://postgres:973335917@localhost:5432/smart",{logging:false})
  

 async function main() {
	try {
		let db = {}
		db.contact1_model = await contact1Model(Sequelize,sequelize)
		db.contact2_model = await contact2Model(Sequelize,sequelize)
		db.about_model = await aboutModel(Sequelize,sequelize)
		db.courses_model = await AboutCoursesModel(Sequelize,sequelize)
		db.statistics_model = await statisticsModel(Sequelize,sequelize)
		db.Home_News_model = await newsModel(Sequelize,sequelize)
		db.News_model = await newsMModel(Sequelize,sequelize)
		db.team_model = await teamMModel(Sequelize,sequelize)
		// await db.team_model.sync({force:true})
		// let x = await db.Home_News_model.create({
		// 	title:"We provide advice and support when studying abroad.",
		// 	message:"Smart English is an innovative learning center! Here you will find classes in the style of your dream. All facilities and news will be continuous; also there are competitions such as debate clubs, conversation clubs and battles, where all young people will test their knowledge."
		// })
		// console.log(x);
		return db
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

module.exports = main