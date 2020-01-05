

### Methods running on a function object()


##### apply
Main uses: 
Append and array to another array

```js 
 function.apply(this, arr)
 ```
 The second parameter is an array (like object)
 
##### call
```js 
 function.call(this, list)
 ```
The second parameter is a list
This can be done using the spread operator ```...```


When using an existing middleware the signature is 
func(req, res, next) such as: ```bodyParser(req, res, next)```

The calling for that method must contain all the signature parameters
