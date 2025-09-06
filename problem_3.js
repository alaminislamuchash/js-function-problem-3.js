/* 3.	একটি ফাংশন লেখো যেটা অ্যারের মধ্যে থাকা সংখ্যাগুলোর সর্বনিম্ন মান (min) return করবে */
function myfunction(number) {
  let min = number[0];
  for (let i of number) {
    if (i < min) {
      min = i;
    }
  }
  console.log("the minimum number is:" + min);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = myfunction(array);
