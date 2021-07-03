// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  const answer = "";
  s = s.split("");
  for (i = 0; i < s.length; i++) {
    s[i] = s[i].toUpperCase();
    s[i] = s[i] + s[i].repeat(i).toLowerCase();
  }
  return s.join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));
