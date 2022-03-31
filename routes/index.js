module.exports = (app) => {
    app.get('/cuidador', app.api.cuidador.getCuidador)
    app.post('/cuidador', app.api.cuidador.createCuidador)
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
}