module.exports = async (Sequelize,sequelize) => {
	return await sequelize.define("contact2", {
		id:{
			type:Sequelize.DataTypes.UUID,
			primaryKey:true,
			defaultValue:Sequelize.UUIDV4
		},
		name:{
			type:Sequelize.DataTypes.STRING(64),
			allowNull:false
		},
		email:{
			type:Sequelize.DataTypes.STRING(64),
			is:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
			allowNull:false,
			unique:true
		},
		phone:{
			type:Sequelize.DataTypes.STRING(13),
			is:/^9989[012345789][0-9]{7}$/,
			unique:true,
			allowNull:false
		},
		
		message:{
			type:Sequelize.DataTypes.STRING(),
			allowNull:false
		}
	})
}