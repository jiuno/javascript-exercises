const ftoc = function(f) {
  resInCelsius = (f - 32)*(5/9);
  return Number(resInCelsius.toFixed(1));
};

const ctof = function(c) {
  resInFarhrenheit = c * (9/5) + 32;
  return Number(resInFarhrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
