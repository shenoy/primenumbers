function prime(n) {
  let arr = [];
  let notPrime = [];

  for (i = 2; i <= n; i++) {
    arr.push(i);
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        notPrime.push(i);
      }
    }
  }

  const nonPrimeUnique = Array.from(new Set(notPrime));

  const prime = arr.filter(x => !nonPrimeUnique.includes(x));
  console.log("prime", JSON.stringify(prime));
}

prime(100000);


