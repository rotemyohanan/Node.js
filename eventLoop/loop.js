// node myFile.js
const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

const shouldContinue = () => {
    // check one: Any pending setTimeout, setInterval, setImmediate?
    // Check two: Any pending OS tasks? (like server listening to port)
    // Check three: any pending long running operation? (Like fs module)
    return (pendingTimers.length || pendingOSTasks.length || pendingOperations.length)
}

// each iteration is 1 'tick' in the EventLoop (entire body executes in 1 'tick')
while(shouldContinue()) {
    // 1) Node looks at pendingTimers and sees if any functions are ready to be called (setTimeoute, setInterval)
    // 2) Node looks at pendingOStasks and pending operations and calls relevant callback
    // 3) Node pauses executions, continute when...
    //    - a new pendingOSTask is done
    //    - a new pendingOperation is done
    //    - a timer is about to complete

    // 4) Look at pendingTimers. call any setImmediate.

    // 5) handle any 'close' events
}

// exit back to the terminal

// Node Event Lopp is a single threaded
// Some of Node Frameworks/Std Lib are not single threaded
