module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("newsHome", {
		id:{
			type:Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue:Sequelize.UUIDV4()
		},
		title:{
			type:Sequelize.DataTypes.STRING(1000),
			allowNull:false
		},
		message:{
			type:Sequelize.DataTypes.STRING(1000),
			allowNull:false
		}
	})
}