const repeatString = function (string, num) {
   let word = string;

   for (let i = 0; i < num; i++) {
      if (num === 0) {
         return '';
      } else if (num < 0) {
         return 'ERROR';
      } else if (num === 1) {
         return word;
      }
   }
   return word.repeat(num);
};
// Do not edit below this line
module.exports = repeatString;
