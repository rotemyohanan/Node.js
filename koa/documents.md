### Koa.js

- light footprint
- ES6+
- uses generators and async/await
- 

Koa router
Koa EJS Templating
Koa Body Parser

```javascript
npm init
npm install koa
npm i -D nodemon
npm install koa-ejs
```

Main file: app.js


### Application

A Koa application is an object containing an array of middleware functions which are composed and executed in a stack-like manner upon request.


### Code example
```javascript
const Koa = require('koa');
const json = require('koa-json');
const path = require('path');
const Router = require('koa-router');
const render = require('koa-ejs');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

// Json prettier middleware
app.use(json());

// Bodyparser
app.use(bodyParser());

const names = ['Vito', 'Joe', 'Henry', 'Eddie', 'Leo'];

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
});

router.get('/', index);
router.get('/contact', showContact);
router.post('/addContact', addContact);
router.get('/koa', showKoa);

async function index(ctx){
  await ctx.render('index', { title: 'My index page ;)', names });
}

async function showContact(ctx){
  await ctx.render('contact');
}

async function addContact(ctx){
  const { name } = ctx.request.body;
  names.push(name);
  ctx.redirect('/');
}

async function showKoa(ctx){
  ctx.body = { msg: 'Hello from Koa!' }
}

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log('Server Started!'))

```
