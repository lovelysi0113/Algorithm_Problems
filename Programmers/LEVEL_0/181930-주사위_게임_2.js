/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181930
 *
 * COMMENT:
 * 숫자들이 몇 개가 같은지 비교하여 그에 맞게 결과를 계산해준다
 **/

function solution(a, b, c) {
	if ((a === b) & (b === c)) {
		return (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
	} else if (a === b || b === c || c === a) {
		return (a + b + c) * (a * a + b * b + c * c);
	} else {
		return a + b + c;
	}
}
