### Debug Mode

Set the environment variables:
```javascript
export NODE_ENV=development
export DEBUG=app:startup // we will see only messeges which are written under that topic to the database
```

Add to the ```index.js``` file the following lines:

```javascript

const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')


startupDebugger('Any text ...')

dbDebugger('Connecting to the database ...')

```
