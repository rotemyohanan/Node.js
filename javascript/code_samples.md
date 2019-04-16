

## javascript code examples


#### Generate random alphanumeric string

```javascript
let randomValue = Math.random().toString(36).replace('0.','') 
console.log(randomValue)
```

> Math.random generates a number between 0-1, hence replacing the `0.` is needed so there will be a pure random string.


