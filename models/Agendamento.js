module.exports = (sequelize, DataType) => {
    const Agendamento = sequelize.define('Agendamento', {
        id_agendamento: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_animal: DataType.INTEGER,
        fk_servico: DataType.INTEGER,
        data_agendamento: DataType.DATE,
        status_agendamento: DataType.STRING
    }, {
        timestamps: false,
        tableName: 'agendamento'
    })
    
    return Agendamento
}
