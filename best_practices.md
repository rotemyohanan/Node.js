(link) [https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja]
# 1. Initializing a project

It is highly recommend creating a new project using 

```javascript 
npm init
```

It creates a new file calls 
```javascript
package.json
```

Node version will be set under

```javascript
"engines": {
   "node": "6.2.0"
}
```

### 2. Setup  ```.npm rc```

```javascript
.npmrc
```
Using the  ```javascript  --save ``` flag is updating the  ```javascript   package.json ```

NPM adds a leading caret **^** to all versions

Using the following command lines
```javascript
npm config set save=true
$ npm config set save-exact=true
```

Will ensure that the  ```javascript   package.json ``` will ensure that running the ``` npm install ```
will save the new versions into the ``` package.json ```

### Add scripts to the ``` package.json```

```javascript 
"scripts": {
  "start": "node myapp.js"
}
```

Runnig the ``` npm start ``` will run the script

##### . PreInstall and Postinstall
-----

```javascript
"scripts": {
  "postinstall": "bower install && grunt build",
  "start": "node myapp.js",
  "test": "node ./node_modules/jasmine/bin/jasmine.js"
}
```

The ```postinstall``` script is run after ```npm install``` is run. 
There’s also ```preinstall``` if you need to run something before all the NPM dependencies are installed.


### 3. Env variables

Configuration management is always a big topic.

```javascript process.env ```  such as ```javascript process.env.NODE_ENV ```


>If you need to load further configurations, you can use a module like https://github.com/indexzero/nconf.
>Another popular option to load environment variables is https://github.com/motdotla/dotenv (Thanks to @szabi)

### 4. Use a style guide


Airbnb - https://github.com/airbnb/javascript

Google - https://google.github.io/styleguide/javascriptguide.xml

jQuery - https://contribute.jquery.org/style-guide/js/

Standard JS - http://standardjs.com/ - thanks to @szabi for pointing out this one


### 5. Tests

Using ``` Jasmine, Mocha, Selenium ```


### 6. Embrace async
async / await and generators in ES2016

Synchronous functions in JavaScript is that they block any other code from running until they complete.
However, synchronous code makes the flow of your application logic easy to understand.

It is highly recommended to run running your app (during development only) with the ``` --trace-sync-io ``` flag.
The ``` --trace-sync-io ``` flag, prints a warning and stack trace whenever your application uses a synchronous API.

##### Great references:
--------

Promises - http://www.html5rocks.com/en/tutorials/es6/promises/

Async / Await - https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html

Generators - https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Iterators_and_Generators

### 7. Handle errors


### 8. Ensure your app automatically restarts

I’d recommend using KeyMetric’s PM2 http://pm2.keymetrics.io/ to manage your process. Though other options include (Nodemon)[http://nodemon.io/] (thanks @szabi) and (Forever)[https://github.com/foreverjs/forever].


