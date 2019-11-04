
### Handling different error types

```js
try {
    var val = JSON.parse(fs.readFileSync("file.json"));
    console.log(val.success);
}
// Gecko-only syntax; used for illustrative purposes
catch (e if e instanceof SyntaxError) {
    console.error("invalid json in file");
}
catch (e) {
    console.error("unable to read file");
}

```
