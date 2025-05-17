/**
 * ABOUT
 *
 * DATE: 2025-05-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181938
 *
 * COMMENT:
 * 숫자를 문자로 합친 후 Number()를 사용하여 숫자 타입으로 변환한다
 **/

function solution(a, b) {
	const ab = Number(`${a}${b}`);
	const ab2 = 2 * a * b;

	return ab > ab2 ? ab : ab2;
}
