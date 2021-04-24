// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
  name = name.split(" ");
  let firsts = [];
  name.forEach((a, b) => {
    a = a.split("");
    a.forEach((c, d) => (d === 0 ? firsts.push(c.toUpperCase()) : null));
  });
  return firsts.join(".");
}

abbrevName("Sam Harris");
abbrevName("Patrick Feenan");
abbrevName("Evan Cole");
abbrevName("P Favuzzi");
abbrevName("David Mendieta");
