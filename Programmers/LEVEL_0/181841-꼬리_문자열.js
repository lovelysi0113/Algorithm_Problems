/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181841
 *
 * COMMENT:
 * includes를 사용하여 부분 문자열인지 확인한다
 **/

function solution(str_list, ex) {
	return str_list.filter(str => !str.includes(ex)).join('');
}
