### Debug Mode

Set the environment variables:
```javascript
export NODE_ENV=development
export DEBUG=app:startup
```

Add to the ```index.js``` file the following lines:

```javascript

const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')


startupDebugger('Any text ...')

dbDebugger('Connecting to the database ...')

```
