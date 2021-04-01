// https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript

function bald(x) {
  let counter = 0;
  const hairs = x.split("").forEach((a, b) => (a === "/" ? counter++ : null));

  function translateHairs(n) {
    return n > 5
      ? "Hobo!"
      : n > 2
      ? "Careless!"
      : n === 2
      ? "Homer!"
      : n === 1
      ? "Unicorn!"
      : "Clean!";
  }
  return `${"-".repeat(x.split("").length)}, ${translateHairs(counter)}`;
}

bald("/---------");
bald("/-----/-");
bald("--/--/---/-/---");
