module.exports = (sequelize, DataType) => {
    const Cuidador = sequelize.define('Cuidador', {
        id_cuidador: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING
    }, {
        timestamps: false,
        tableName: 'cuidador'
    })

    Cuidador.associate = (modelsList) => {
        Cuidador.hasMany(modelsList.Bixo , {
            foreignKey: "fk_cuidador"
        })
    } 

    return Cuidador
}