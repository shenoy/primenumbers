function sieve(n) {
  let arr = [];
  let combArr = [];
  for (i = 2; i < n; i++) {
    arr.push(i);
    for (let j = 2; j < parseInt(Math.sqrt(n)) + 1; j++) {
      newArr = arr.map(x => x * j).filter(x => x < n);
      newArr.map(x => combArr.push(x));
    }
  }

  const notPrime = Array.from(new Set(combArr));

  const primeArr = arr.filter(x => !notPrime.includes(x));
  console.log(JSON.stringify(primeArr));
}

sieve(10000);
