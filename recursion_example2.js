function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


for (var i = 1; i <= 20; i++) {
    console.log(`${i}. ${fibonacci(i)}`);
  }
//console.log(fibonacci(3))

