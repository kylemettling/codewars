function removeAnagrams(arr) {
    
    return arr.map(str => )
    .filter(
    (el, idx, orig) => el.split("").sort().join("")
    //   ===
    //   String(orig[idx + 1])
    //     .split("")
    //     .sort()
    //     .join("")
  );
}

removeAnagrams(["code", "doce", "ecod", "framer", "frame"]);
