// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
    function catYears(age) {
        return age === 1 ? 15 : age === 2 ? 24 : age = 24 + ( 5 * (age - 2))
    }
    function dogYears(age) {
        return age === 1 ? 15 : age === 2 ? 24 : age = 24 + ( 4 * (age - 2))
    }
    console.log([humanYears, dogYears(humanYears), catYears(humanYears)])
  }
  


humanYearsCatYearsDogYears(1)
humanYearsCatYearsDogYears(2)
humanYearsCatYearsDogYears(10)