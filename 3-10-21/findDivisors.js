// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  let divs = [];
  for (i = 0; i < integer; i++) {
    if (integer % i === 0 && i != 1) {
      divs.push(i);
    }
  }
  console.log(divs.length === 0 ? `${integer} is prime` : divs);
}

divisors(15);
divisors(12);
divisors(13);
