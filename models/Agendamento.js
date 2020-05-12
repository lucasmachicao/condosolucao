const Agendamento = (sequelize,DataTypes) =>{
    let agendamento = sequelize.define(
        'Agendamento',
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allownull:false
            },
            data:{
                type:DataTypes.DATE,
                allownull:false
            },
            hora:{
                type:DataTypes.TIME,
                allownull:false
            }
        }
    )
    
    return agendamento;
};


module.exports = Agendamento;