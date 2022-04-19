const { gateKeeper } = require('../middlewares')

module.exports = (app) => {
    app.get('/cuidador', app.api.cuidador.getCuidador)
    app.post('/cuidador', gateKeeper, app.api.cuidador.createCuidador)
    app.delete('/cuidador/:id', app.api.cuidador.deleteCuidador)

    app.get('/bixo', app.api.bixo.getBixo)
    app.get('/bixo/:id', app.api.bixo.getBixoSelecionado)
    app.post('/bixo', app.api.bixo.createBixo)
    app.delete('/bixo/:id', app.api.bixo.deleteBixo)
    
    app.get('/agenda', app.api.agendamento.getAgendamento)
    app.post('/agenda', app.api.agendamento.createAgendamento)

    app.get('/servico', app.api.servico.getServico)
    app.post('/servico', app.api.servico.createServico)
    app.delete('/servico/:id', app.api.servico.deleteServico)

    app.get('/usuario', app.api.usuario.getUsuario)
    app.post('/usuario', app.api.usuario.createUsuario)
    app.delete('/usuario/:id', app.api.usuario.deleteUsuario)
    app.post('/login', app.api.usuario.login)
}