const crypto = require('crypto')

const start = Date.now()
// gives an asynchronous Password-Based Key Derivation Function 2
// crypto.pbkdf2( password, salt, iterations, keylen, digest, callback )
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now()
    const diffTime = end-start
    console.log('the process time: ' + diffTime)
})

// const end = Date.now()
// const diffTime = end-start
// console.log('the process time: ' + diffTime)