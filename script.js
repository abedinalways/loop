// let fruits=['mango', 'banana','orange', 'jackfruit', 'lemon'];
// for(const fruit of fruits){
//   console.log(`i want to eat ${fruit}`)
// }
// let number = 1;
// while (number<10) {
//   console.log(number);
//   number++;
// }
// for (let i = 1; i <= 30; i++){
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i)
// }
// for (let i = 1; i <= 30; i++){
//   if (i % 5 === 0) {
//     break;
//   }
//   console.log(i)
// }
//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// let sum = 0;
// let i = 1;
// while (i<200){
//   sum = sum + i;
//     if(i===100){
//         break;
//     }
//     console.log(sum)
// }
  

for (let i = 1; i <= 100; i++) {
  // Check if i is a perfect square
  if (Math.sqrt(i) % 1 === 0) {
    console.log(`First square number found: ${i}`);
    break; // Stop the loop
  }
}