

# Initializing a project

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

### Setup  .npm rc

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

