/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181926
 *
 * COMMENT:
 * 문자가 무엇인지에 따라 값을 더하거나 빼준다
 **/

function solution(n, control) {
	return control.split('').reduce((answer, ch) => {
		if (ch === 'w') return answer + 1;
		if (ch === 's') return answer - 1;
		if (ch === 'd') return answer + 10;
		else return answer - 10;
	}, n);
}
