/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120891
 *
 * COMMENT:
 * filter() 함수를 사용하여, 3, 6, 9의 개수를 구할 수 있다
 **/

function solution(order) {
	let numbers = String(order).split('');

	return numbers.filter(num => ['3', '6', '9'].includes(num)).length;
}
