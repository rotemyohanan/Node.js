
# Validation


### Joi 
https://github.com/hapijs/joi


```javascript
npm i joi
```


```javascript
const Joi = require('joi')

const schema = {
  name: Joi.string().min(3).max(30).required()
}

const result = Joi.validate(req.body, schema)
console.log(result)

```

```javascript

```

```javascript

```
