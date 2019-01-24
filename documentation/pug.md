


### PUG

run the command line:
```javascript
npm i pug
```

In the index file add the lines:
```javascript
app.set('view engine', 'pug')
app.set('views', './views') // Default
```

Than create a folder calls **views**
Under that folder create a file calls **index.pug**

In the REST call of the **'/'** (main path) replace the response to 
```javascript
res.send() ---> res.render('index', {title: 'My application', message: 'Hello World'})
```

```javascript
```

```javascript
```
