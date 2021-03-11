// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(x, bags, cap){
    let collectedCrap = 0
    let dog = 0
    x.forEach((a, b) => a.forEach((c, d) => c === "@" ? collectedCrap += 1 : c === 'D' ? dog += 1 : collectedCrap += 0))
    // console.log(collectedCrap);
    if(dog > 0) {
        console.log("Dog!!");
    } else if (collectedCrap <= bags * cap) {
        console.log("Clean");
    } else {
        console.log("Cr@p");
    }
}





crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)
crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)
crap([['_','_'], ['_','@'], ['D','_']], 2, 2)