const Comunicado = (sequelize,DataTypes) =>{
    let comunicado = sequelize.define(
        "Comunicado",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allownull:false
            },
            titulo:{
                type:DataTypes.STRING(100),
                allownull:false
            },
            texto:{
                type:DataTypes.STRING,
                allownull:true
            },
            img:{
                type:DataTypes.STRING(500),
                allownull:true
            }
        },
    )
    return comunicado;
};
Comunicado.associate =(models)=>{
    Comunicado.belongsTo(models.Usuario,{foreignKey:"usuarios_id", as:"usuario"})
}

module.exports = Comunicado;