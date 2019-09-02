
### Middleware

The middleware is a higher-order function.

The function returns ```ctx, next```

```ctx```- ctx is a shorthand for context, which is an object of the current request's life cycle and stores some information about the current request.
```next``` - call the subsequent middleware, the return value is Promise.


#### Koa emphasises
1) calling to ```next()``` must be await for it, hence ```await next()```
2) When need to return use ```return next()```

in express the middleware is acting until the ```next()``` and never touching back the middleware.
In koa, the ```await next()``` can be set in the middle of the middleware and the process will keep on running from the last point it was ```awaited```.

