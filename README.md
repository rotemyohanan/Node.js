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


### configuration

Using RC

```javascript npm i config , debug```



### MongoDB

Install mongoDB:
```javascript
   brew install mongodb
```

MongoDB saves data in the ```/data/db```

Hence create the directory
``` sudo mkdir -p /data/db ```

``` sudo chown -R `id -un` /data/db ```

### MongoDB

> Remove the MongoDB:
https://medium.com/@rajanmaharjan/uninstall-mongodb-macos-completely-d2a6d6c163f9



To have launchd start mongodb now and restart at login:
  brew services start mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb/4.0.4_1: 18 files, 259.8MB
Rotems-MacBook-Pro-2291:ign-genetic-assets rotemyochanan$ 

``` Rotems-MacBook-Pro-2291:ign-genetic-assets rotemyochanan$ mongod
2019-01-06T18:34:19.319+0200 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] MongoDB starting : pid=66622 port=27017 dbpath=/data/db 64-bit host=Rotems-MacBook-Pro-2291.local
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] db version v4.0.4
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] git version: f288a3bdf201007f3693c58e140056adf8b04839
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] allocator: system
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] modules: none
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] build environment:
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten]     distarch: x86_64
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten]     target_arch: x86_64
2019-01-06T18:34:19.331+0200 I CONTROL  [initandlisten] options: {}
2019-01-06T18:34:19.331+0200 I STORAGE  [initandlisten] exception in initAndListen: NonExistentPath: Data directory /data/db not found., terminating
2019-01-06T18:34:19.331+0200 I NETWORK  [initandlisten] shutdown: going to close listening sockets...
2019-01-06T18:34:19.331+0200 I NETWORK  [initandlisten] removing socket file: /tmp/mongodb-27017.sock
2019-01-06T18:34:19.332+0200 I CONTROL  [initandlisten] now exiting
2019-01-06T18:34:19.332+0200 I CONTROL  [initandlisten] shutting down with code:100
```


### MongoDB Compass

Doownload the mongo db compass

``` https://www.mongodb.com/download-center/compass?jmp=hero ```

install mongoose

```javascript
   npm install mongoose
```
Jan 2019 version:   + mongoose@5.4.2


Import data into the mongoDB
```javascript
 mongoimport --db mongo-exercises --collection courses --file exercise-data.json --jsonArray

```

### MongoDB documentation for DB queries

https://mongodb.github.io/node-mongodb-native/markdown-docs/queries.html


