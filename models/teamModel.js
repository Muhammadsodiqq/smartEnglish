module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("team", {
		id:{
			type:Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue:Sequelize.UUIDV4()
		},
		img:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false,
		},
		name:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false,
		},
		profession:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false,
		}
	})
}