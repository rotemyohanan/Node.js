const axios = require('axios')
const fs = require('fs')
const crypto = require('crypto')
process.env.UV_THREADPOOL_SIZE = 10

const start = Date.now()

const doRequest = (start) => {
    return axios.get('https://www.google.com')
        .then((response) => {
            // const {status, statusText, data} = response
            // const resp = {status, statusText, data}
            // console.log(res
            console.log('doRequest: ' + (Date.now() - start) )
        })
        .catch(e => console.error(e))
}

const createHash = () => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('hash: ' + (Date.now() - start))
    })
}

const main = (start) => {
    doRequest(start)
    fs.readFile('doWork.js', 'utf-8', () => {
        console.log('FS: ' + (Date.now() - start))
    })
    createHash()
    createHash()
    createHash()
    createHash()
}
main(start)