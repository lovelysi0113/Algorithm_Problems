/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181929
 *
 * COMMENT:
 * 원소들의 곱과 합을 각각 구한 뒤 두 값을 비교한다
 **/

function solution(num_list) {
	const a = num_list.reduce((total, num) => total * num, 1);
	const b = num_list.reduce((total, num) => total + num, 0);

	return a < b * b ? 1 : 0;
}
