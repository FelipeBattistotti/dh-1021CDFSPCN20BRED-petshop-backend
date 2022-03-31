const { Cuidador, Agendamento, Bixo, Servico } = require('../models')
module.exports = (app) => {
    const getAgendamento =  async (req, res) => {
        try {
            const agenda = await Agendamento.findAll()
            res.status(200).json(agenda)
        }
        catch(err) {
            res.status(500).json({error: true, ...err})
        }
    }

    
    const createAgendamento = async (req, res) => {
        const agenda = req.body
        console.log(req.body)
        try {
            await Agendamento.create(agenda)
            res.status(201).json({msg: 'Sucesso!'})
        }
        catch(err) {
            console.log(err)
            res.status(400).json({error: true, ...err})
        }
    }


    return  { getAgendamento, createAgendamento } 
}