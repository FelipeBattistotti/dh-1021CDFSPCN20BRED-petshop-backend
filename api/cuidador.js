const {
    Cuidador,
    Agendamento,
    Bixo,
    Servico
} = require('../models')

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