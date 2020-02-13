# Find the Greatest Common Divisor of N numbers

Check [Euclidian Algorithm](https://www.youtube.com/watch?v=JUzYl1TYMcU)

```js
//v1 recursive
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  if (b > a) {
    return gcd(b, a);
  }

  return gcd(b, a % b);
};

//v2 loop
const gcd2 = (a, b) => {
  let temp;
  while (b > 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const result = gcd2(2, 45);
console.log(result);


```



