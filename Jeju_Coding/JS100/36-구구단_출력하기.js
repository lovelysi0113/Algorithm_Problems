/**
 * ABOUT
 *
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/36-3a4189e2c35142f780f0b02b4c7b4bd8
 *
 * COMMENT:
 * 구구단 결과를 한 줄에 출력하기 위해 for문을 사용했다
 **/

function solution(n) {
	let result = [];
	for (let num = 1; num <= 9; num++) {
		result.push(num * n);
	}
	console.log(result.join(' '));
}
