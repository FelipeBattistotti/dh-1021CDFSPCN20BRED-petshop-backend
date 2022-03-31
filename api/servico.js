const { Cuidador, Agendamento, Bixo, Servico } = require('../models')
module.exports = (app) => {
    const getServico=  async (req, res) => {
        try {
            const x = await Servico.findAll()
            res.status(200).json(x)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }

    const createServico = async (req, res) => {
        const {tipo} = req.body
        console.log(req.body)
        try {
            await Servico.create({tipo})
            res.status(201).json({msg: 'Serviço criado com sucesso!'})
        }
        catch(err) {
            console.log(err)
            res.status(400).json({error: true, ...err})
        }
    }
    
    const deleteServico = async (req, res) => {
        const id = req.params.id
        try {
            await Servico.destroy({
                where: {
                    id_servico: id
                }
            })
            res.status(200).send("Excluido")
        } catch (err) {
            res.status(500).json({error: true, ...err})
        }
    }


    return  { getServico, createServico, deleteServico } 
}