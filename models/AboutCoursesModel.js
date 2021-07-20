module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("courses", {
		id:{
			type:Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue:Sequelize.UUIDV4()
		},
		title:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false,
			unique:true
		},
		message:{
			type:Sequelize.DataTypes.STRING(300),
			allowNull:false
		}
	})
}