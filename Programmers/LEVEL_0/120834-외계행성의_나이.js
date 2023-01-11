/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120834
 *
 * COMMENT:
 * 나이의 각 자릿수을 알파벳으로 변경한다
 **/

function solution(age) {
	// PROGRAMMERS-962 행성에서의 나이 - 알파벳 조합
	const numToString = {
		0: 'a',
		1: 'b',
		2: 'c',
		3: 'd',
		4: 'e',
		5: 'f',
		6: 'g',
		7: 'h',
		8: 'i',
		9: 'j',
	};

	let answer = String(age).split('');

	return answer.map(num => numToString[num]).join('');
}
