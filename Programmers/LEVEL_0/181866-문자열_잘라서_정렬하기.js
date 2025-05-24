/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181866
 *
 * COMMENT:
 * 문자열을 x로 나눈 후 빈 문자열을 제거하고 정렬한다
 **/

function solution(myString) {
	return myString
		.split('x')
		.filter(str => str !== '')
		.sort();
}
