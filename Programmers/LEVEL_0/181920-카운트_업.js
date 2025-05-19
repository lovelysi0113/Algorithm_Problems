/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181920
 *
 * COMMENT:
 * start_num부터 end_num까지의 모든 수를 for문을 사용하여 answer 배열에 추가한다
 **/

function solution(start_num, end_num) {
	const answer = [];

	for (let num = start_num; num <= end_num; num++) {
		answer.push(num);
	}

	return answer;
}
