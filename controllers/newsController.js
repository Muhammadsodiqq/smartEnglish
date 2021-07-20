module.exports = class News {
    static async addNewsController (req,res) {
        try {
            let x = await req.postgres.News_model.create({
                message:req.body.text
            })
            res.redirect("/admin")
        } catch (e) {
            if(String(e).includes('SequelizeUniqueConstraintError: повторяющееся значение ключа нарушает ограничение уникальности "news_message_key"')) {
                e = "this text is already exists, the text is unique"
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
    
    static async deleteNewsController (req,res) {
        try {
            let x = await req.postgres.News_model.findAll()
            let newsArr = []
            for(let i of x) {
                newsArr.unshift(i.dataValues)
            }
            let id = newsArr[Number(req.body.num) - 1]?.id
            if(id == undefined) throw "There is not so much news"
            let y = await req.postgres.News_model.destroy({
                where:{
                    id:id
                }
            })
            console.log(y);
            res.redirect("/admin")
        }  catch (e) {
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