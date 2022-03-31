module.exports = (sequelize, DataType) => {
    const Bixo = sequelize.define('Bixo', {
        id_animal: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        raca: DataType.STRING,
        sexo: DataType.STRING,
        fk_cuidador: DataType.INTEGER
    }, {
        timestamps: false,
        tableName: 'bixo'
    })
    
    Bixo.associate = (modelsList) => {
        Bixo.belongsTo(modelsList.Cuidador, {
            foreignKey: "fk_cuidador"
        })
        Bixo.belongsToMany(modelsList.Servico, {
            through: modelsList.Agendamento,
            foreignKey: "fk_animal",
            timestamps: false
        }
            )
    }
    return Bixo
}