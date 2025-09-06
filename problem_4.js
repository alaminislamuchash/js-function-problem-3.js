/* 4.	make_avg() ফাংশনটা এমনভাবে পরিবর্তন করো যেন যদি অ্যারে খালি থাকে তাহলে "Array is empty!" return করে।
 */
function average_number(number) {
  let sum = 0;
  for (let num of number) {
    sum = sum + num;
  }
  const average = sum / alaminarray.length;
  return average;
  return sum;
}
const alaminarray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const alamin = average_number(alaminarray);
console.log(alamin);
