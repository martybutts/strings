//STRING MANIPULATION

//1. reverse a number
function reverseNumber(num) {
  num = num + "";
  return num.split("").reverse().join("");
}
console.log("1.", reverseNumber(12345));

//2. reverse a string
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
console.log("2.", reverse('12345'));

//3.
function reverseString(s) {
  return s.split('').reverse().join('');
}
console.log("3.", reverseString('12345'));
