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
