

## request timeout

#### Set custom timeout:
The timeout can be set globally for entire server:
```js
var server = app.listen();
server.setTimeout(500000);
```

The timeout can be set for a specific route
```js
app.post('/xxx', function (req, res) {
   req.setTimeout(500000);
});
```

The default value for the express request timeout is: ** 90 [sec] / 120 [sec] **
It is defined by the TCP connection
