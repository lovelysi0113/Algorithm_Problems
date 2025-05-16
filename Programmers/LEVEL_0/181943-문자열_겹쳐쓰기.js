/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181943
 *
 * COMMENT:
 * slice() 함수를 사용하여 overwrite_string을 중간에 넣어준다
 **/

function solution(my_string, overwrite_string, s) {
	const owStringLength = overwrite_string.length;

	return my_string.slice(0, s) + overwrite_string + my_string.slice(s + owStringLength);
}
