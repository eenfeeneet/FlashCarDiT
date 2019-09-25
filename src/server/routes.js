module.exports = (app, db) => {

    const pokemon = require('./controllers/pokemon')(db);
    const user = require('./controllers/user')(db);

    app.get('/pokemon/:id', pokemon.get);

    app.get('/api/pokemon/:id', pokemon.apiget);


    app.post('/register', user.register);
    app.post('/login', user.login);
};