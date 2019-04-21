let promise1 = new Promise(function(resolve, reject){

	if(true) {
		setTimeout(resolve('This is true'), 10000)
	} else {
		reject('Wrong')
	}


})

console.log(promise1)
