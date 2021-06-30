/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/20-62c820e571564b488e8136d7c1b7c46f
 *
 * COMMENT:
 * / 연산자와 floor() 함수를 사용하여 몫을 구할 수 있다
 * % 연산자를 사용하여 나머지를 구할 수 있다
 **/

function solution(input) {
	let [a, b] = input.split(' ').map(el => parseInt(el));
	console.log(Math.floor(a / b), a % b);
}
