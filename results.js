

const express = require('express');
const router = module.exports = express.Router();
const apikey = '6DTu2UoSYHSrVkZidKBlE3BAjac4Nh95KbMpJ5bA'
const soundurl = 'https://freesound.org/apiv2/search/text/?query='
// const imageurl = 'http://127.0.0.1:5000/result?search_query='
const testurl = 'https://jsonplaceholder.typicode.com/posts'
router.use(express.urlencoded({ extended: true }));
router.use(express.json()) // To parse the incoming requests with JSON payloads

const axios = require('axios').default;

async function sound_search(url) {

    let response = await axios.get(url);
    let data = JSON.stringify(response.data)
    return JSON.parse(data)
    // console.log(data)

};



router.post('/', function (req, res) {
    // console.log(req.body)
    let keys = req.body.keys
    let context = sound_search(soundurl + keys + '&fields=name,description,previews' + '&token=' + apikey)
        .then((context) => {

            res.status(200);
            res.render('results', {
                layout: 'index',
                context
            });
            console.log(context)
        })
})

router.get('/:keys', function (req, res) {
    // console.log(req.params)
    res.setHeader('Access-Control-Allow-Origin', '*')
    let keys = req.params.keys
    let accepts = req.accepts(['application/json', 'text/html'])
    let context = sound_search(soundurl + keys + '&fields=name,description,previews' + '&token=' + apikey)
        .then((context) => {
            if (accepts === 'application/json') {
                res.status(200).json(context);
            }
            else {
                res.status(200);
                res.render('results', {
                    layout: 'index',
                    context
                });
            }
            // console.log(context["results"][0]["previews"]["preview-lq-mp3"])
            // console.log(context)
            return context

        })
});


module.exports = router;