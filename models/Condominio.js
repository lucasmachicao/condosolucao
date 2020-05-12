const Condominio = (sequelize,DataTypes) =>{
    let condominio = sequelize.define(
        "Condominio",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allownull:false
            },
            nome:{
                type:DataTypes.STRING(100),
                allownull:false
            },
            endereco:{
                type:DataTypes.STRING(100),
                allownull:false
            }
        },{
            tableName:"condominios",
            timestamps:false
            
        }
    )


    return condominio;
}

module.exports = Condominio;