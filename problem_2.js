/* 2.	একটি ফাংশন লেখো যেটা অ্যারের মধ্যে থাকা সংখ্যাগুলোর সর্বোচ্চ মান (max) return করবে  */
function myfunction(num) {
  let max = num[0];
  for (let i of num) {
    if (i > max) {
      max = i;
    }
  }
  console.log("the maximum number is" + max);
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
const result = myfunction(number);
