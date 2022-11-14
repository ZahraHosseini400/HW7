let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(values) {
  let letters = new Set(values);
  // console.log(letters);
  return Array.from(letters);
}

console.log(unique(values));

