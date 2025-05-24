/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181864
 *
 * COMMENT:
 * A와 B를 서로 바꿔서 새로운 문자열을 만든 후, 해당 문자열에 pat이 포함되어 있는지 확인한다
 **/

function solution(myString, pat) {
	const changedStr = myString
		.split('')
		.map(str => (str === 'A' ? 'B' : 'A'))
		.join('');

	return changedStr.includes(pat) ? 1 : 0;
}
