/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181891
 *
 * COMMENT:
 * slice() 함수를 사용하여 배열을 잘라낸다
 **/

function solution(num_list, n) {
	return [...num_list.slice(n), ...num_list.slice(0, n)];
}
