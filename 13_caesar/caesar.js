const caesar = function (string, shift) {

   let newString = '';

   if (shift < 0) {
      return caesar(string, shift + 26);
   }

   for (let i = 0; i < string.length; i++) {
      let newChar = '';
      newChar = string[i].charCodeAt();

      if (newChar >= 65 && newChar <= 90) {
         newString += String.fromCharCode(((newChar - 65 + shift) % 26) + 65);

      } else if (newChar >= 97 && newChar <= 122) {
         newString += String.fromCharCode(((newChar - 97 + shift) % 26) + 97);

      } else {
         newString += string[i];
      }
   }
   return newString;
};
caesar('A', 5);
caesar('Hello, World!', 75);

// Do not edit below this line
module.exports = caesar;
