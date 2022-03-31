module.exports = (sequelize, DataType) => {
    const Servico = sequelize.define('Servico', {
        id_servico: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: DataType.STRING
    }, {
        timestamps: false,
        tableName: 'servico'
    })
    
    Servico.associate = (modelsList) => {
        Servico.belongsToMany(modelsList.Bixo,{
            through: modelsList.Agendamento,
            foreignKey: "fk_servico",
            timestamps: false
        })
    }

    return Servico
}