function migratoryBirds(arr) {
  const ids = new Map();
  let key = null;
  let value = 0;
  const checkHig = (x) => {
    if (ids.get(x) == value && key != null && key > x) {
      key = x;
    } else if (ids.get(x) > value) {
      key = x;
      value = ids.get(x);
    }
  };

  arr.forEach((element) => {
    if (ids.has(element)) {
      ids.set(element, ids.get(element) + 1);
      checkHig(element);
    } else {
      ids.set(element, 1);
      checkHig(element);
    }
  });

  return key;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
