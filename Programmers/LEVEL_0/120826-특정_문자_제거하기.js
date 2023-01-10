/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120826
 *
 * COMMENT:
 * filter() 함수를 사용하여 letter인 요소를 제거해준다
 **/

function solution(my_string, letter) {
	return my_string
		.split('')
		.filter(str => str !== letter)
		.join('');
}
