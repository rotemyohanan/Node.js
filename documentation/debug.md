### Debug Mode

Set the environment variables:
```javascript
export NODE_ENV=development
export DEBUG=app:startup // we will see only messeges which are written under that topic to the database
```

In case we want to get number of debug messeges:
```javascript
export DEBUG=app:startup,app:db
Or
export DEBUG=app:*

```

Add to the ```index.js``` file the following lines:

```javascript

const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')


startupDebugger('Any text ...')

dbDebugger('Connecting to the database ...')

```
