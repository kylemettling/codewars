// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  return bonus ? `${"\u00A3"}${(salary *= 10)}` : `${"\u00A3"}${salary}`;
}

bonusTime(10000, true);
bonusTime(25000, true);
bonusTime(10000, false);
bonusTime(60000, false);
bonusTime(2, true);
bonusTime(78, false);
bonusTime(67890, true);
