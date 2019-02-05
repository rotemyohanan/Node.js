
# JSON

>Note:
A note on AJAX — JSON is often used with AJAX, or Asynchronous JavaScript and XML.
AJAX is used to transfer data without having to refresh the browser page


JSON saved in a ```.json``` file. JSON files consist of a series of key/value pairs.
```javascript
{ "key": "value" }
```

### Data Types
The following data types can be used with JSON:
```javascript
strings (in double quotes)
numbers
objects
arrays
Booleans (true or false)
null
```



### JSON.stringify()
The ```JSON.stringify()``` function converts a JavaScript object into a JSON string. 
**Strings** are **lightweight** and therefore **very useful** when transporting data from a client to a server.


The ```JSON.stringify()``` function lets us **convert objects to strings**. 
To do the opposite, we use the ```JSON.parse()``` function.

### JSON.parse()

Convert a string back into a function.

```javascript
let s = JSON.parse(contacts);
```

### Using Fetch
The **Fetch API** is a newer built-in feature of JavaScript that makes working with requests and responses much easier. 
We can use Fetch with our data like so:

```javascript
fetch('./users.json').then(response => {
  return response.json();
}).then(data => {
  // Work with your JSON data here..
  console.log(data);
}).catch(err => {
  // What do when the request fails
  console.log('The request failed!'); 
});
```
