/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181906
 *
 * COMMENT:
 * 두 문자열을 맨 앞에서부터 비교한다
 **/

function solution(my_string, is_prefix) {
	for (let i = 0; i < is_prefix.length; i++) {
		if (my_string[i] !== is_prefix[i]) {
			return 0;
		}
	}

	return 1;
}
