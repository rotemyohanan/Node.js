const axios = require('axios')

module.exports.getGoogle = async (start) => {
    return axios.get('https://www.google.com')
        .then((response) => {
            // const {status, statusText, data} = response
            // const resp = {status, statusText, data}
            // console.log(resp)
            console.log(Date.now() - start)
        })
        .catch(e => console.error(e))
}
