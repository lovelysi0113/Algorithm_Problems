/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181932
 *
 * COMMENT:
 * mode 전환과 문자 추가 규칙대로 하나씩 처리한다
 **/

function solution(code) {
	let answer = '';

	let mode = 0;

	code.split('').forEach((ch, idx) => {
		if (ch === '1') {
			mode = mode === 0 ? 1 : 0;
		} else {
			const rest = idx % 2;
			if (rest === mode) answer += ch;
		}
	});

	return answer === '' ? 'EMPTY' : answer;
}
