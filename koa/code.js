
// simple REST call 

const Koa = require('koa')
const app = new Koa()

const myAsync = () => new Promise(resolve => setTimeout(resolve, 2000, 'Hello worldsss'))


app.use(async (ctx) => {
    const body = []
    body.push(await myAsync())
    //body.push(await myAsync())
    ctx.body = {
      status: 'active',
      message: 'This is the activation body text'
    }
    ctx.status = 201
    return ctx
})

app.listen(3000)

// Return response
ctx.throw(401, 'access_denied', { user: user });

