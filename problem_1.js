/*1.	একটি ফাংশন লেখো যেটা অ্যারের মধ্যে থাকা সংখ্যাগুলোর যোগফল (sum) return করবে */
function sumnumber(num) {
  let sum = 0;
  for (let i of num) {
    sum = sum + i;
  }
  console.log(sum);
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumnumber(number);
return result;
