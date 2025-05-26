/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181839
 *
 * COMMENT:
 * % 연산을 사용하여 a, b가 짝수인지 홀수인지 확인한다
 **/

function solution(a, b) {
	const checkA = a % 2;
	const checkB = b % 2;

	if (checkA === 0 && checkB === 0) {
		return Math.abs(a - b);
	} else if (checkA !== 0 && checkB !== 0) {
		return a * a + b * b;
	} else {
		return 2 * (a + b);
	}
}
