/**
 * ABOUT
 *
 * DATE: 2025-05-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181935
 *
 * COMMENT:
 * 2로 나눈 나머지로 홀수 / 짝수를 구분한다
 **/

function solution(n) {
	let result = 0;

	if (n % 2 === 0) {
		for (let i = 2; i <= n; i += 2) {
			result += i * i;
		}
	} else {
		for (let i = 1; i <= n; i += 2) {
			result += i;
		}
	}

	return result;
}
