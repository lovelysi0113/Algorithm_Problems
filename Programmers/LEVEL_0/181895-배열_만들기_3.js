/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181895
 *
 * COMMENT:
 * intervals의 값에 따라 배열을 각각 slice해준 후 합친다
 **/

function solution(arr, intervals) {
	const [[a1, b1], [a2, b2]] = intervals;
	return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}
