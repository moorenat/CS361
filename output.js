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



router.get('/', function (req, res) {
    context = req.query
    console.log(context)
    state = context.state
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
        console.log(result)
    })
    res.render('results', {
        layout: 'index',
        context


    })


    // let keys = req.body.keys
    // let context = sound_search(soundurl + keys + '&fields=name,description,previews' + '&token=' + apikey)
    //     .then((context) => {
    //         res.status(200);
    //         res.render('results', {
    //             layout: 'index',
    //             context
    //         });
    //         console.log(context)
    //     })
})
// const urlParams = new URLSearchParams(queryString);
// const state = urlParams.get('state')
// const code = urlParams.get('code')

// console.log(state, code)

// router.get('/:keys', function (req, res) {
//     console.log(req.params)
//     let keys = req.params.keys
//     let accepts = req.accepts(['application/json', 'text/html'])
//     let context = sound_search(soundurl + keys + '&fields=name,description,previews' + '&token=' + apikey)
//         .then((context) => {
//             if (accepts === 'application/json') {
//                 res.status(200).json(context);
//             }
//             else {
//                 res.status(200);
//                 res.render('results', {
//                     layout: 'index',
//                     context
//                 });
//             }

//             console.log(context)
//             return context

//         })
// });


module.exports = router;