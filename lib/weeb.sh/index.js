const fetch = require('node-fetch');
const RandomImageModel = require('./models/random-image');

module.exports = class WeebClient {
    constructor(k) {
        this.options = {
            method: 'GET',
            headers: {
                'User-Agent': 'Maika/DiscordBot (https://github.com/auguwu/Maika)',
                'Authorization': `Wolke ${k}`
            }
        };
    }

    /**
     * Grabs an random image
     * 
     * @param {string} type The type of the image
     * @returns {Promise<RandomImageModel>}
     */
    getRandomImage(type) {
        return new Promise((resolve, reject) => {
            return fetch(`https://api.weeb.sh/images/random?type=${type}`, this.options)
                .then(res => res.json())
                .then(json => resolve(new RandomImageModel(json)))
                .catch(error => reject(new Error(error)));
        });
    }
};