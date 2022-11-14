function aclean(arr) {
  let result = [];
  let temp = [];
  arr.forEach((element) => {
    x = element.toString().toLowerCase().split("");
    t = x.sort().join("");

    // console.log(t);
    if (temp.includes(t) == false) {
      temp.push(t);
      result.push(element);
    }
  });
  // console.log(temp);
  return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era
