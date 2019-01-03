# Node.js


### Env variables:

   process.env - holds all the environment variables
    
Process is a global object.

### Creating a new env variable:

    1) export HEY='heyy!!!'
    2) process.env.whatever = 'this is the value of the whatever key'

    
    process.env.NODE_ENV
    
    
index.js inside node means the same as index.html
When require a directory in a file it will directly fetching the index.js of that specific directory.


 
Install Nodemon (Node monitor)

```javascript npm install nodemon -g --save```

The nodemon can to run the program ``` nodemon index.js```

### Define a syatem environment variable

```javascript 
   const port = process.env.PORT || 3000; 
```

Define env variable using the command line

```javascript 
   export PORT=5000
```

Requests params:
```javascript 
   req.params
```


Requests query:
```javascript 
   req.query
```



>note: the JSON send in the postman, each field should be set as a String "id", as opposed to the code, where the key values should not be String "" .


### Joi - validation check for the input 
```javascript
const schema = {
        name: Joi.string().min(3).required()
    }

   const result = Joi.validate(req.body, schema)
   console.log(result)

    if(result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }
```

### Middle ware functions

```javascript express.json() ```
returns  req.body as a json object



```javascript app.use((req, res, next) => { }) ```// the next is the next function in the middleware in the pipeline, else the request stays pending


calling to the method is a sequence

Env

```javascript process.env.NODE_ENV   // undefind by default
   app.get('env')
```


