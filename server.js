const express = require("express")
const  app = express()
const path = require("path")
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.set("view engine", "ejs")


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


app.listen(80, () => console.log("server ready"))