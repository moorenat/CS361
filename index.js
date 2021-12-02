// sources cited: Used this guide to get handlebars/express/node running locally:
//https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65

const router = module.exports = require('express').Router();
const axios = require('axios').default;
const express = require('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads
//Loads the handlebars module
const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
//Sets handlebars configurations 
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});

app.use('/results', require('./results.js'));


app.use(function (req, res) {
    res.status(404);
    res.render('404', { layout: 'index' });
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500', { layout: 'index' });
});

app.listen(port, () => console.log(`App listening to port ${port}`));