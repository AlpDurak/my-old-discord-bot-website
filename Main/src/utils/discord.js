const axios = require('axios')

async function getSizeData() {
    try {
        const response = await axios({
            url: 'https://api.syfac.xyz/api/discord/syfac/size',
            method: 'GET'
        })
        console.log(response)
        return response.data;
    } catch (err) { console.log(err) }
}

module.exports = { getSizeData }