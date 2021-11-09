const url = require('url')
const axios = require('axios').default;
const express = require('express');
const router = module.exports = express.Router();
const apikey = '6DTu2UoSYHSrVkZidKBlE3BAjac4Nh95KbMpJ5bA'
const soundurl = 'https://freesound.org/apiv2/search/text/?query='
router.use(express.urlencoded({ extended: true }));
router.use(express.json()) // To parse the incoming requests with JSON payloads
const { Datastore } = require('@google-cloud/datastore')
const STATE = "State"
const datastore = new Datastore();


function fromDatastore(item) {
    item.id = item[Datastore.KEY].id;
    return item;
}
function get_states() {
    const q = datastore.createQuery(STATE);
    return datastore.runQuery(q).then((entities) => {
        return entities[0].map(fromDatastore)
    });
}
// async function sound_search(url) {

//     let response = await axios.get(url);
//     let data = JSON.stringify(response.data)
//     return JSON.parse(data)
//     // console.log(data)

// };

const client_id = '897198022231-dkfkrdbhftau0d4dm7pt9ipo3o8r1knq.apps.googleusercontent.com'
// const redirect_uri = 'https://moorenat-oauth.wl.r.appspot.com/results'
const redirect_uri = 'http://localhost:8080/results'
const client_secret = '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'
let token = []
router.get('/', function (req, res) {
    query = req.query
    state = query.state
    code = query.code
    console.log(state)
    let check = false
    let states = get_states().then((states) => {
        for (i = 0; i < states.length; i++) {
            curState = states[i]
            if (curState.state === state) {
                check = true
                break
            }
        }
    }).then((output) => {
        return check
    })
    states.then(function (result) {
        if (result) {
            axios.post('https://www.googleapis.com/oauth2/v4/token', {
                'code': code,
                'client_id': client_id,
                'client_secret': client_secret,
                'redirect_uri': redirect_uri,
                'grant_type': 'authorization_code'

            }).then(function (response) {
                // console.log(response.data)
                data = response.data
                token.push(data)
                return data
            }).catch(function (error) {
                // console.log(error)
            }).then(function (response) {
                // console.log(data)

                return data
            })
        }
        else {
            res.status(400).send('Oops')
        }
    })
    console.log(token)
    res.render('results', {
        layout: 'index'
        // context
    })



})



module.exports = router;