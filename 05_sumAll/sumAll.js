const sumAll = function (min, max) {
   let num = 0;

   if ((min > 0 && max > 0) && Number.isInteger(min) && Number.isInteger(max)) {
      if (min <= max) {
         for (let i = min; i <= max; i++) {
            num += i;
         }
      } else if (min >= max) {
         for (let i = max; i <= min; i++) {
            num += i;
         }
      }
      return num;
   } else {
      return 'ERROR';
   }
};

// console.log(isNaN("10"));
console.log(sumAll(123, 1));
console.log(sumAll(10, -1));
console.log(sumAll(10, [90]));
console.log(Number.isNaN('90'));

// Do not edit below this line
module.exports = sumAll;
