/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181931
 *
 * COMMENT:
 * 등차수열을 만든 후, included가 true인 수들만 더해준다
 **/

function solution(a, d, included) {
	const sequence = new Array(included.length).fill(a).map((num, idx) => num + idx * d);

	return sequence.reduce((total, num, idx) => {
		return included[idx] ? total + num : total;
	}, 0);
}
