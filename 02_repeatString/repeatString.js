const repeatString = function (string, num) {
   let word = string;

   if (num < 0) {
      return 'ERROR';
   } else if (num === 0) {
      return '';
   } else if (num === 1) {
      return word;
   } else {
      return word.repeat(num);
   }
};

// Do not edit below this line
module.exports = repeatString;
