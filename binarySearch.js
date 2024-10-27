function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  return null;
}

// Пример использования
const arr = [];

for (let i = 1; i <= 100000000; i++) {
  if (i % 3 === 0) arr.push(i);
}

console.log(binarySearch(arr, 99999999));
