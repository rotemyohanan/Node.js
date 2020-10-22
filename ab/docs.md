### AB (Apache Benchmark)

##### GET Request
```js
ab -k -c 350 -n 20000 google.com/
```

##### POST Request

```js
ab -p C:\Users\Dell\Desktop\ab\smartinvoice.txt -T application/json -H '1ef632f7-02fe-41cd-beec-a1f9bb8cae03' -c 100 -n 1000 http://localhost:3036/app/smartinvoice/document/smartinvoice


$ cat test.json
json='{ "timestamp" : 1484825894873, "test" : "test"}'

ab -c 10 -n 1000 -p test.json -T application/x-www-form-urlencoded  https://example.com/test
```


### Working POST request
curl -H "Accept: application/json" -H "Content-type: application/json"  -X POST 'http://localhost:3000/api/v1/insert' -k -v


ab -T 'application/json' -c 100 -n 1000 -p test.json http://localhost:3000/api/v1/insert
