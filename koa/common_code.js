

// Listen on port
let port = 4000
app.listen(port, () => {console.log(`connected to the server is up and running on port ${port}`)})



// JSON prettier Middleware
app.use(json())



