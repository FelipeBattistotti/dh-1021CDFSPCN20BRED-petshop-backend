const bcrypt = require('bcrypt')
const { QueryTypes } = require('sequelize')

const {
  sequelize,
  Usuario
} = require('../models')

module.exports = (app) => {
    const getUsuario = async (req, res) => {
        try {
            const usuario = await Usuario.findAll()
            res.status(200).json(usuario)
        } catch (err) {
            res.status(500).json({
                error: true,
                ...err
            })
        }
    }

    const createUsuario = async (req, res) => {
        // const usuario = req.body
        // console.log(req.body)

        // busca
        const user = await sequelize
          .query(
            'SELECT * FROM usuario WHERE email = :email',
            {
              replacements: { email: req.body.email },
              type: QueryTypes.SELECT
            }
          )
        if (user)
            res.status(400).json({ err: true, msg: 'Usuário já cadastrado!' })

        const usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha, 10)
        }

        try {
            await Usuario.create(usuario)
            res.status(201).json({
                msg: 'Sucesso!'
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                error: true,
                ...err
            })
        }
    }

    const deleteUsuario = async (req, res) => {
        const id = req.params.id
        try {
            await Usuario.destroy({
                where: {
                    id_usuario: id
                }
            })
            res.status(200).send("Excluido")
        } catch (err) {
            res.status(500).json({error: true, ...err})
        }
    }

    const login = async (req, res) => {
        const usuario = {
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha, 10)
        }

        try {
            res.status(201).json({
                msg: 'Sucesso!'
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                error: true,
                ...err
            })
        }
    }

    return {
        getUsuario,
        createUsuario,
        deleteUsuario,
        login
    }
}