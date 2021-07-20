const express = require("express")
const  app = express()
const path = require("path")
const fs = require("fs")
const postgres = require("./moduls/postgres.js")


let db =  postgres()

function main () {

	//middlewares start
	app.use(express.json())
	app.use(express.urlencoded({extended:true}))
	app.use(express.static('public'))
	app.use(async (req,res,next) => {
		req.postgres = await db
		next()
	})

	//middlewares end

	//settings start
	app.set("view engine", "ejs")
	//settings end


	//routes start
	let routesPath = path.join(__dirname,"routes",)
	fs.readdir(routesPath, (err,files) => {
		files.forEach(file => {
			const routerPath = (path.join(routesPath,file))
			const router = require(routerPath)
			if(router.path && router.router) {
				app.use(router.path, router.router)
			}
		})
	})
	//routes end

	app.listen(80, () => console.log("server ready"))
}

main()