/* 4.	make_avg() ফাংশনটা এমনভাবে পরিবর্তন করো যেন যদি অ্যারে খালি থাকে তাহলে "Array is empty!" return করে।
 */
function make_avg(number) {
  let sum = 0;
  if (number.length === 0) {
    const arr = "Array is empty";
    return arr;
  } else {
    for (let num of number) {
      sum = sum + num;
    }
    const average = sum / number.length;
    return average;
  }
}
const value = [];
const result = make_avg(value);
console.log(result);
