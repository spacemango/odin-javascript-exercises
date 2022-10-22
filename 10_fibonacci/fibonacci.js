const fibonacci = function (num) {

   +num;

   if (num < 0) return 'OOPS';

   let a = 0;
   let b = 1;

   for (let i = 1; i < num; i++) {
      let c = b;
      b = a + b;
      a = c;
   }

   return b;

};

console.log(fibonacci(2));

// Do not edit below this line
module.exports = fibonacci;
