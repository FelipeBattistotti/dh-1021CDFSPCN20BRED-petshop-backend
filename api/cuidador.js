const jwt = require('jsonwebtoken')

const {
    Cuidador,
    Agendamento,
    Bixo,
    Servico
} = require('../models')
const { secret } = require('../utils')

module.exports = (app) => {
    const getCuidador = async (req, res) => {
        try {
            const cuidador = await Cuidador.findAll()
            res.status(200).json(cuidador)
        } catch (err) {
            res.status(500).json({
                error: true,
                ...err
            })
        }
    }

    const createCuidador = async (req, res) => {
        if (req.headers && req.headers.authorization) {
            try {
                jwt.verify(req.headers.authorization, secret)
                
                const cuidador = req.body
                try {
                    await Cuidador.create(cuidador)
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
            } catch (error) {
                res.status(401).json(error)
            }
        } else res.status(401).json('Usuário não autenticado!')
    }

    const deleteCuidador = async (req, res) => {
        const id = req.params.id
        try {
            await Cuidador.destroy({
                where: {
                    id_cuidador: id
                }
            })
            res.status(200).send("Excluido")
        } catch (err) {
            res.status(500).json({error: true, ...err})
        }
    }


    return {
        getCuidador,
        createCuidador,
        deleteCuidador
    }
}