/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/57-1-35ac8107242f4e1da2f8fd57ad2a8d1d
 *
 * COMMENT:
 * 0부터 1000까지의 수에서 1은 몇 번이나 들어갔는지 계산할 수 있다
 **/

// 내가 푼 방법
let result = 0;
for (num = 1; num <= 1000; num++) {
	let n = num;
	while (n > 0) {
		let chk = n % 10;
		if (n === 1) {
			result += 1;
		}
		n = parseInt(n / 10);
	}
}
console.log(result);

// 답안

//1번 답안 - 고전적인 방법
const obj = {};

for (let i = 0; i <= 1000; i++) {
	let tmp = i;
	while (tmp > 0) {
		let num = tmp % 10;
		if (obj[num]) {
			obj[num]++;
		} else {
			obj[num] = 1;
		}
		tmp = parseInt(tmp / 10, 10);
	}
}

console.log(obj[1]);

//2번 답안 - 정규표현식 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
	s += i;
}
console.log(s);
console.log(s.match(/1/g).length);

//3번 답안 - for in 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
	s += i;
}
let count = 0;
for (let j in s) {
	if (s[j] == 1) {
		count++;
	}
}
console.log(count);

//4번답안 - for of 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
	s += i;
}
let count = 0;
for (let j of s) {
	if (j == 1) {
		count++;
	}
}
console.log(count);
