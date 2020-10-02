process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster')
const express = require('express')
const crypto = require('crypto')
const app = express()

// ab request: ab -n 100 -c 10 http://localhost:3000/api/v1/fast/

const sleep = async (time) => {
    return new Promise((resolve) => {
        return setTimeout(resolve(time*4), time * 100)
    })
}

const doWork = (duration) => {
    const start = Date.now()
    while ((Date.now() - start) < duration) {
    }
}
const main = () => {
    if (cluster.isMaster) {
        cluster.fork()
        cluster.fork()
    } else {
        app.get('/api/v1/fast', async (req, res) => {
            console.log('inside a fast route')
            const value = await sleep(2)
            console.log(`value: ${value}`)
            return res.status(200).send('Hi this is a fast response')
        })
        app.listen(3000)
    }
}

main()