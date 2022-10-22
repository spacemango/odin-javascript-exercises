const palindromes = function (string) {
   const regex = /[^a-zA-Z]/g;

   const newString = string.replace(regex, '').toLowerCase();
   const reverseStr = newString.split('').reverse().join('');

   return newString === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
