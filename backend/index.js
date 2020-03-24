const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento:'Semana Omnistack',
        aluno:'Dennis van den Berg'
    });
});

app.listen(3333);