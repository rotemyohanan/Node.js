// process.env.UV_THREADPOOL_SIZE = 10 // define the number of threads in the threadpool (libuv)

const crypto = require('crypto')
// console.log(`Threads: ${process.env.UV_THREADPOOL_SIZE}`)
const start = Date.now()
// gives an asynchronous Password-Based Key Derivation Function 2
// crypto.pbkdf2( password, salt, iterations, keylen, digest, callback )
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(1) process time: ' + diffTime)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(2) process time: ' + diffTime)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(3) process time: ' + diffTime)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(4) process time: ' + diffTime)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(5) process time: ' + diffTime)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(6) process time: ' + diffTime)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('(7) process time: ' + diffTime)
})

