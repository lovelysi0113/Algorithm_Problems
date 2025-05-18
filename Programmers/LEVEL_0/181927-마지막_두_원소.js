/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181927
 *
 * COMMENT:
 * 마지막 원소와 그 전 원소를 찾은 후 두 수를 비교한다
 **/

function solution(num_list) {
	const length = num_list.length;
	const last = num_list[length - 1];
	const second = num_list[length - 2];
	const answer = last > second ? last - second : last * 2;

	return [...num_list, answer];
}
