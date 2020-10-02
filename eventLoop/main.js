const { getGoogle } = require('./async')
// process.env.UV_THREADPOLL_SIZE = 2
process.env.UV_THREADPOOL_SIZE = 3 // define the number of threads in the threadpool (libuv)
const { doWork } = require('./doWork')

const main = async (start) => {
    await getGoogle(start)
    await doWork(3000)
    await getGoogle(start)
    await getGoogle(start)
    await getGoogle(start)
    await getGoogle(start)
}

const start = Date.now()
main(start)
