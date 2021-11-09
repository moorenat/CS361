// sources cited: Used this guide to get handlebars/express/node running locally:
//https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65

const router = module.exports = require('express').Router();
const axios = require('axios').default;
const express = require('express');
const app = express();
const port = 8080;
const { Datastore } = require('@google-cloud/datastore')
const bodyParser = require('body-parser');
const datastore = new Datastore();

const STATE = "State"
app.set('trust proxy', true);

function fromDatastore(item) {
    item.id = item[Datastore.KEY].id;
    return item;
}

function post_state(state) {
    var key = datastore.key(STATE);
    const new_state = { "state": state };
    return datastore.save({ "key": key, "data": new_state }).then(() => { return key });
}

function get_states() {
    const q = datastore.createQuery(STATE);
    return datastore.runQuery(q).then((entities) => {
        return entities[0].map(fromDatastore)
    });
}

function get_state(id) {
    const key = datastore.key([STATE, parseInt(id, 10)]);
    return datastore.get(key).then((entity) => {
        if (entity[0] === undefined || entity[0] === null) {
            return entity
        }
        else {
            return entity.map(fromDatastore);
        }
    });
}



app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});
const client_id = '897198022231-dkfkrdbhftau0d4dm7pt9ipo3o8r1knq.apps.googleusercontent.com'
// const redirect_uri = 'https://moorenat-oauth.wl.r.appspot.com/results'
const redirect_uri = 'http://localhost:8080/results'
const scope = 'https://www.googleapis.com/auth/userinfo.profile'
function state_generator(max = 1000000) {

    return ('state' + Math.floor(Math.random() * max))
}

app.post('/', (req, res) => {
    let state = state_generator()
    post_state(state).then(key => {
        id = key.id
        output = { "id": id, "state": state }
    })
    const authURL = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id='
        + client_id + '&redirect_uri=' + redirect_uri + '&scope=' + scope + '&state=' + state
    const auth = axios.get(authURL).then(function (response) {
        // console.log(response);
    }).catch(function (error) {
        // console.log(error)
    }).then(function () {
        res.redirect(authURL)
    });

    // return res.redirect(auth)

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