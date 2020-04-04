function prime(n) {
  let a = Date.now();

  let arr = [];
  for (i = 2; i < n; i++) {
    isPrime = true;
    for (j = 2; j < parseInt(Math.sqrt(i) + 1); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) arr.push(i);
  }
  let b = Date.now();
  console.log(
    "prime ",
    JSON.stringify(arr),
    arr.length,
    `result returned in ${(b - a) / 60000} min`
  );
}

prime(Math.pow(10,7));
