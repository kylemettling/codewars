// https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript

var replaceDots = function(str) {
    str = str.split('').map((a, b) => a === '.' ? a = '-' : a).join('')
  console.log(str);
}




replaceDots("one.two.three")