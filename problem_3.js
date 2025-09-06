/* 3.	একটি ফাংশন লেখো যেটা অ্যারের মধ্যে থাকা সংখ্যাগুলোর সর্বনিম্ন মান (min) return করবে */
function minimum(number) {
  let min = number[0];
  for (let i of number) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}
const array = [1, 5, 10];
const result = minimum(array);
console.log(result);
