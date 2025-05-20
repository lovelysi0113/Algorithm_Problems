/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181899
 *
 * COMMENT:
 * start_num부터 end_num까지 1씩 감소하는 수를 배열에 담는다
 **/

function solution(start_num, end_num) {
	const answer = [];

	for (let n = start_num; n >= end_num; n--) {
		answer.push(n);
	}

	return answer;
}
