// https://www.codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript

function sortByLanguage(list) {
    const theList = list.sort((devA, devB) => {
        if(devA.language.localeCompare(devB.language) === 0) {
            return devA.firstName.localeCompare(devB.firstName)
        } else {
            return devA.language.localeCompare(devB.language)
        }
    })
    return theList
  }




  var list1 = [  
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
  ];
  
  var list2 = [  
    { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
    { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
  ];
  sortByLanguage(list1)
  sortByLanguage(list2)