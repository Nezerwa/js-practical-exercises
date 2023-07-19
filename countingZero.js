function countZero(n) {
  let str = "";
  let count = 0;
  //changing and storing them into a string
  for (let i = 1; i <= n; i++) {
    str += i;
  }

  //counting thr
  for (let j = 0; j < str.length; j++) {
    if (str[j] == 0) {
      count++;
    }
  }
  return count;
}
console.log(countZero(1000));
