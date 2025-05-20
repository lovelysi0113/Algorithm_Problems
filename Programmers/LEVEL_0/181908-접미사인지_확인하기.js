/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181908
 *
 * COMMENT:
 * 두 문자열을 맨 뒤에서부터 비교한다
 **/

function solution(my_string, is_suffix) {
	const strLen = my_string.length;
	const sufLen = is_suffix.length;

	for (let i = 1; i <= sufLen; i++) {
		if (my_string[strLen - i] !== is_suffix[sufLen - i]) {
			return 0;
		}
	}

	return 1;
}
