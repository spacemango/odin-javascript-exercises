const removeFromArray = function (...args) {
   let array = args[0];

   return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
