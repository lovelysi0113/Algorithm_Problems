/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181903
 *
 * COMMENT:
 * 0부터 code.length -1까지의 인덱스를 차례대로 q로 나누었을 때 나머지가 r인지 확인한다
 **/

function solution(q, r, code) {
	let answer = '';

	for (let i = 0; i < code.length; i++) {
		if (i % q === r) {
			answer += code[i];
		}
	}

	return answer;
}
