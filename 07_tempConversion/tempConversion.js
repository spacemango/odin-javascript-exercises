const ftoc = function (degree) {
  if (degree === 32) {
    return 0;
  } else {
    return ((degree - 32) / 1.8).toFixed(1);
  }
};

const ctof = function (degree) {
  if (degree === 0) {
    return 32;
  } else {
    return ((degree * 1.8) + 32).toFixed(1);
  }
};

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
