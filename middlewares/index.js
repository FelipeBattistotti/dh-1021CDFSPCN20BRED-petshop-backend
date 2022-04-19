const jwt = require('jsonwebtoken')

const { secret } = require('../utils')

const gateKeeper = (req, res, next) => {
  console.log('passou pela porteiro!!!')
  if (req.headers && req.headers.authorization) {
      try {
          jwt.verify(req.headers.authorization, secret)
          
          next()
      } catch (error) {
          res.status(401).json(error)
      }
  } else res.status(401).json('Usuário não autenticado!')
}

module.exports = { gateKeeper }