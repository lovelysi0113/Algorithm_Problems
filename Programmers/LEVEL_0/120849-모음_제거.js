/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120849
 *
 * COMMENT:
 * filter() 함수를 사용하여 모음만 제외해준다
 **/

function solution(my_string) {
	return my_string
		.split('')
		.filter(str => !['a', 'e', 'i', 'o', 'u'].includes(str))
		.join('');
}
