module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("statistics", {
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
		number:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false
		}
	})
}