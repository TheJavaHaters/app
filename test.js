let arr = [1, 2, 3, 4, 4];
let s = new Set(arr);

if (arr.length != s.size) {
  console.log("Duplicate elements found");
}
