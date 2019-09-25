module.exports = (app, db) => {
    const user = require('./controllers/user')(db);


    app.post('/register', user.register);
    app.post('/login', user.login);

    app.get('/users', user.login);

};