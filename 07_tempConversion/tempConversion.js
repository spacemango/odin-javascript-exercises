const ftoc = function (degree) {
  let converted = 0;
  if (degree === 32) {
    return 0;
  } else {
    converted = ((degree - 32) / 1.8).toFixed(1);
    return +converted;
  }
};

const ctof = function (degree) {
  let converted = 0;

  if (degree === 0) {
    return 32;
  } else {
    converted = ((degree * 1.8) + 32).toFixed(1);
    return +converted;
  }
};

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
