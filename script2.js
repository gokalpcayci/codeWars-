const spinWords = function (string) {
  const arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let reverse = arr[i].split('').reverse().join('');
    if (arr[i].length >= 5) arr[i] = reverse;
  }
  return arr;
};
spinWords('hello my name is gokalp');
