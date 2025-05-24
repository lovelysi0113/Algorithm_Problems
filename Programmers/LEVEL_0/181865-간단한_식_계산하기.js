/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181865
 *
 * COMMENT:
 * split을 통해 문자열을 나눠서 각각의 숫자와 연산자를 추출한다
 **/

function solution(binomial) {
	const strArr = binomial.split(' ');

	const a = Number(strArr[0]);
	const op = strArr[1];
	const b = Number(strArr[2]);

	switch (op) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
	}
}
