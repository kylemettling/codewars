// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

function findOddNames(list) {
    
    const devs = []
    for(dev of list) {

        const codes = []
        dev.firstName.split('').forEach((char, index) => codes.push(dev.firstName.charCodeAt(index)))
        const result = codes.reduce((acc, curr) => 
            acc += curr
        , 0)


        if(result % 2 != 0) {
            devs.push(dev)
        }
    }
    return devs
    
  }




  var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  var list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  ];
  
  findOddNames(list1)
  findOddNames(list2)
  
  