// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  console.log(
    string.split("").reduce((a, b) => {
      a[b] = (a[b] || 0) + 1;
      return a;
    }, {})
  );
}

count("aba");
count("");
