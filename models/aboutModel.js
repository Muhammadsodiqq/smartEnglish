module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("about", {
		id:{
			type:Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue:Sequelize.UUIDV4()
		},
		message:{
			type:Sequelize.DataTypes.STRING(1000),
			allowNull:false
		}
	})
}