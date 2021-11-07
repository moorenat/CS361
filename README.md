# CS361

After cloning repository you should just have to run: (npm install) to create a package-lock.json file. Then you can start the server with: node index.js


Use the GUI to get an html page with SoundSearch results. Otherwise use a GET request to the following. Use the accepts header to specify application/json to get a json object back. 


/results/{insert query here, space separated}

Headers:
'accepts': 'application/json'

eg:

localhost:3000/results/dog

result:

{
    "count": 4545,
    "next": "https://freesound.org/apiv2/search/text/?&query=dog&page=2&fields=name,description,previews",
    "results": [
        {
            "name": "Dog Toy",
            "description": "Dog toy sound fx.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/392/392617_7383104-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/392/392617_7383104-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/392/392617_7383104-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/392/392617_7383104-hq.mp3"
            }
        },
        {
            "name": "Dog walks on wooden floor",
            "description": "Dog walks on wooden floor",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/518/518166_10933546-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/518/518166_10933546-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/518/518166_10933546-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/518/518166_10933546-hq.mp3"
            }
        },
        {
            "name": "Dog Bark.wav",
            "description": "A furious dog barking.\r\n\r\n",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/327/327666_5632380-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/327/327666_5632380-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/327/327666_5632380-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/327/327666_5632380-hq.mp3"
            }
        },
        {
            "name": "Group_of_Dogs_Barking.WAV",
            "description": "Group of angry dogs.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/337/337101_3474310-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/337/337101_3474310-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/337/337101_3474310-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/337/337101_3474310-hq.mp3"
            }
        },
        {
            "name": "Barking Dogs.wav",
            "description": "This is a recording of a group of around 15 dogs all barking as they come out to play.\n\nIf needed I can provide any recordings of dog sounds on request.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/518/518570_10201334-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/518/518570_10201334-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/518/518570_10201334-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/518/518570_10201334-hq.mp3"
            }
        },
        {
            "name": "dogbarking.mp3",
            "description": "A dog barking",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/413/413758_7958399-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/413/413758_7958399-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/413/413758_7958399-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/413/413758_7958399-hq.mp3"
            }
        },
        {
            "name": "Mr Dog_01.wav",
            "description": "Recording of my alaskan malamute barking.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/276/276267_5284496-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/276/276267_5284496-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/276/276267_5284496-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/276/276267_5284496-hq.mp3"
            }
        },
        {
            "name": "Dog Barking, Single, A.wav",
            "description": "My neighbour's dog never stops... so I finally decided to get something out of it - here is a snippet. The barks have a natural echo from the surrounding countryside, and some nearby birds were chirping. I have applied occasional EQ to reduce the bass frequencies. A little bit of handling noise.\n\n<b>This sound is <u>not</u> in the public domain. Please attribute/credit the sound if you use it.</b> If you would prefer to not have to give attribution, then take a look at the <b><a href=\"https://www.jshaw.co.uk/inspectorj-freesound-library\" rel=\"nofollow\">attribution-free license</a></b>.\n\nAn example of how you might credit is by putting this in the description/credits:\n\"Dog Barking, Single, A.wav\" by InspectorJ (<a href=\"http://www.jshaw.co.uk\" rel=\"nofollow\">www.jshaw.co.uk</a>) of <a href=\"http://Freesound.org\" rel=\"nofollow\">Freesound.org</a>\n\nIf any of these sounds have been of help, and you are feeling charitable, please do consider<b> <a href=\"http://www.freesound.org/donations/donate/\" rel=\"nofollow\">donating to Freesound</a> </b>to help keep the site running (a link is also on the home page). Any donations are greatly appreciated! And for more awesome sounds, do please <b><a href=\"https://www.jshaw.co.uk/libraries\" rel=\"nofollow\">check out my sound libraries</a></b> or <b><a href=\"https://www.jshaw.co.uk/store\" rel=\"nofollow\">SFX store</a></b>.\n\nPlease comment on where you intend to use the sound, and feel free to post a link to the work where you used it if you want (I enjoy watching/listening to anything you create!)\n\nThe sound was recorded using a \"H1 Zoom recorder\" on 25th October 2017.\n\nNote: Audio quality is always better when downloaded.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/406/406085_5121236-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/406/406085_5121236-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/406/406085_5121236-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/406/406085_5121236-hq.mp3"
            }
        },
        {
            "name": "LBS_FX DOG Small Alert Bark001.wav",
            "description": "Recorded in Marantz PMD620 with onboard condenser mics 24-bit 48khz",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/163/163459_2965892-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/163/163459_2965892-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/163/163459_2965892-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/163/163459_2965892-hq.mp3"
            }
        },
        {
            "name": "Blossom Bark  29sec mix.wav",
            "description": "A hiss reduced version of an earlier upload.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/456/456943_3194431-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/456/456943_3194431-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/456/456943_3194431-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/456/456943_3194431-hq.mp3"
            }
        },
        {
            "name": "dogs_1.WAV",
            "description": "This was recording near a dog crate with dogs",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/421/421810_2286319-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/421/421810_2286319-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/421/421810_2286319-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/421/421810_2286319-hq.mp3"
            }
        },
        {
            "name": "Dog Chewing Snack.wav",
            "description": "Sound of my dog happilly chewing a snack.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/188/188879_3370987-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/188/188879_3370987-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/188/188879_3370987-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/188/188879_3370987-hq.mp3"
            }
        },
        {
            "name": "Small growling dog",
            "description": "My small dog growling near the mic. Captured on a USB yeti mic.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/321/321179_5444324-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/321/321179_5444324-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/321/321179_5444324-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/321/321179_5444324-hq.mp3"
            }
        },
        {
            "name": "Dog squeak toy",
            "description": "A squeaker toy that my dog enjoys a great deal. Captured with yeti mic.",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/321/321178_5444324-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/321/321178_5444324-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/321/321178_5444324-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/321/321178_5444324-hq.mp3"
            }
        },
        {
            "name": "Barking Dog",
            "description": "This is a recording of my Highland West Terrier dog, happily barking after discovering that she was about to be taken out to the streets for a walk with me. Recorded with a Zoom H4n Stereo at 48Khz 24bits",
            "previews": {
                "preview-lq-ogg": "https://freesound.org/data/previews/180/180977_3370987-lq.ogg",
                "preview-lq-mp3": "https://freesound.org/data/previews/180/180977_3370987-lq.mp3",
                "preview-hq-ogg": "https://freesound.org/data/previews/180/180977_3370987-hq.ogg",
                "preview-hq-mp3": "https://freesound.org/data/previews/180/180977_3370987-hq.mp3"
            }
        }
    ],
    "previous": null
}

