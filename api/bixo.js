const { Cuidador, Agendamento, Bixo, Servico } = require('../models')
module.exports = (app) => {
    const getBixo =  async (req, res) => {
        try {
            const bixo = await Bixo.findAll({
                include:{
                    model: Servico
                }
            })
            res.status(200).json(bixo)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }

    const getBixoSelecionado =  async (req, res) => {
        const bixoid = req.params.id
        try {
            const bixo = await Bixo.findAll({
                where: {
                    id_animal: bixoid
                },
                include: {
                    model: Servico
                }
            })
            res.status(200).json(bixo)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }
    
    const createBixo = async (req, res) => {
        const bixo = req.body
        console.log(req.body)
        try {
            await Bixo.create(bixo)
            res.status(201).json({msg: 'Bixo criado com sucesso!'})
        }
        catch(err) {
            console.log(err)
            res.status(400).json({error: true, ...err})
        }
    }

    const deleteBixo = async (req, res) => {
        const id = req.params.id
        try {
            await Bixo.destroy({
                where: {
                    id_animal: id
                }
            })
            res.status(200).send("Excluido")
        } catch (err) {
            res.status(500).json({error: true, ...err})
        }
    }

    return  { getBixo, createBixo, getBixoSelecionado, deleteBixo } 
}