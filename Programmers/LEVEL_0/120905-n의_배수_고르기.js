/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120905
 *
 * COMMENT:
 * filter() 함수를 사용하여 n의 배수가 아닌 수들을 제거할 수 있다
 **/

function solution(n, numlist) {
	return numlist.filter(num => num % n === 0);
}
