module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("news", {
		id:{
			type:Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue:Sequelize.UUIDV4()
		},
		message:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false,
			unique:true
		},
		
})}