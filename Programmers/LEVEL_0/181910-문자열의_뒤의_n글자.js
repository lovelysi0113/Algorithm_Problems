/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181910
 *
 * COMMENT:
 * 글자 길이에서 n을 뺀 만큼의 인덱스부터 잘라낸다
 **/

function solution(my_string, n) {
	const len = my_string.length;

	return my_string.slice(len - n);
}
