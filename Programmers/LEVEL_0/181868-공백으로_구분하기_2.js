/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181868
 *
 * COMMENT:
 * 문자열을 공백을 기준으로 잘라낸 후 빈 문자열을 제거한다
 **/

function solution(my_string) {
	return my_string.split(' ').filter(str => str !== '');
}
