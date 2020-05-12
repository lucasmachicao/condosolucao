const Usuario = (sequelize,DataTypes) =>{
    let usuario = sequelize.define(
        "Usuario",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            senha:{
                type:DataTypes.STRING(256),
                allowNull:false
            },
            bloco:{
                type:DataTypes.STRING(45),
                allowNull:true
            },
            apto:{
                type:DataTypes.INTEGER,
                allowNull:true,
                default:0
            },
            email:{
                type:DataTypes.STRING(100),
                allowNull:false
            },
            telefone:{
                type:DataTypes.BIGINT(11),
                allowNull:false
            },
            sindico:{
                type:DataTypes.TINYINT(1),
                allowNull: true
            }
        },{
            tableName:"usuarios",
            timestamps:false
        }
    )
    usuario.associate =(models)=>{
        usuario.belongsTo(models.Condominio,{foreignKey:"condominios_id", as:"condominio"})
    }
    return usuario;
};


module.exports = Usuario;