module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING(50),
        email: DataType.STRING(100),
        senha: DataType.STRING(200)
    }, {
        timestamps: false,
        tableName: 'usuario'
    })

    return Usuario
}