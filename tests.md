

### Jest

```javascript
  npm i jest --save-dev
```

```javascript
  npm install --save-dev babel-preset-env
```

```javascript
npm install --save-dev @babel/core
```

```javascript
npm install babel-jest
```

The package.json scripts:
```javascript
"scripts": {
    "test": "jest --verbose"
  },
```


### req-res-mock

Installing the req-res-mock
```javascript
npm i -D mock-req-res
```

```javascript
npm i -D sinon
```

Creating a mocking test:
```javascript    
const req = mockRequest({ body: { isBest: true, mutation: "C.1048A>G", gene: "BLM", sampleID: "NA98465" }})
```
