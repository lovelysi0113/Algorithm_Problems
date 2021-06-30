/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/35-Factory-6a3a32fd25344c7e9e7ae5eaa7a37dc2
 *
 * COMMENT:
 * pow() 함수를 사용하여 거듭제곱 수를 구할 수 있다
 **/

function one(n) {
	function two(num) {
		return Math.pow(num, n);
	}
	return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
