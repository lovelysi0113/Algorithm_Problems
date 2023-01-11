/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120848
 *
 * COMMENT:
 * 1!부터 차례대로 구하며 n을 넘지않는 최대 펙토리얼 수를 구한다
 **/

function solution(n) {
	let number = 1;
	let result = 1;

	while (result <= n) {
		number += 1;
		result *= number;
	}

	return number - 1;
}
