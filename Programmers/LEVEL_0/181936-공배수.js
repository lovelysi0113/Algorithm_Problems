/**
 * ABOUT
 *
 * DATE: 2025-05-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181936
 *
 * COMMENT:
 * n과 m으로 각각 나눠서 나머지가 0인지 확인한다
 **/

function solution(number, n, m) {
	return number % n === 0 && number % m === 0 ? 1 : 0;
}
