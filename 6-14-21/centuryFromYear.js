// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  const lead = year / 100;
  const rounded = Math.floor(lead);
  return lead === rounded ? rounded : rounded + 1;
}

century(1705);
century(1900);
century(1601);
century(2000);
century(89);
