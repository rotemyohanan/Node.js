
### Middleware

The middleware is a higher-order function.

The function returns ```ctx, next```

```ctx```- ctx is a shorthand forcontext, which is an object of the current request's life cycle and stores some information about the current request.
```next``` - call the subsequent middleware, the return value is Promise.
