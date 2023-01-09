/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120822
 *
 * COMMENT:
 * split() 함수를 사용하여 배열로 변경한다
 * reverse() 함수를 사용하여 배열을 뒤집는다
 * join() 함수를 사용하여 배열을 문자열로 변경하여 뒤집은 문자열을 구한다
 **/

function solution(my_string) {
	return my_string.split('').reverse().join('');
}
