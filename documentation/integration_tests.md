
### Integration Tests


npm install supertest --save-dev




Testing and array of results using Jest:
```javascript
expect(result).toEqual(expect.arrayContaining(['EURO','USD','AUD']))
```


Install watchman

```javascript
npm r -g watchman
brew install watchman
```




```javascript
const mockFunction = jest.fn()
mockFunction.mockReturnValue(1)
// mockFunction.mockResolveValue(1)
// mockFunction.mockRejectValue(new Error('...'))
const result = await mockFunction()
```


```javascript
db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' })
mail.send = jest.fn()
lib.notifyCustomer({ customerId : 1 })
expect(mail.send).toHaveBeenCalled()



```
