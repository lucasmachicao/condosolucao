const Area_comum = (sequelize,DataTypes) =>{
    let area_comum = sequelize.define(
        "Area_comum",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allownull:false
            },
            nome:{
                type:DataTypes.STRING(45),
                allownull:false
            }
        }
    )
    return area_comum;
}

module.exports = Area_comum;